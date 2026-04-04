import Head from 'next/head';
import { useRef, useState } from 'react';

// ─── Hardcoded repo config ─────────────────────────────────────────────────
const GH_OWNER  = 'nichoteloo';
const GH_REPO   = 'nichoteloo.github.io';
const GH_BRANCH = 'master';
// ──────────────────────────────────────────────────────────────────────────

async function commitToGitHub(pat, filename, content) {
  const timestamp = Date.now();
  const safeName  = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
  const filePath  = `posts/${timestamp}_${safeName}`;
  const encoded   = btoa(unescape(encodeURIComponent(content)));

  const res = await fetch(
    `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${filePath}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${pat}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github+json',
      },
      body: JSON.stringify({
        message: `Add post: ${safeName}`,
        content: encoded,
        branch: GH_BRANCH,
      }),
    }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'GitHub API error');
  }

  return filePath;
}

export default function TextDrop() {
  const [pat, setPat]                     = useState('');
  const [patVisible, setPatVisible]       = useState(false);
  const [currentText, setCurrentText]     = useState('');
  const [fileName, setFileName]           = useState('pasted-text.txt');
  const [viewerVisible, setViewerVisible] = useState(false);
  const [lineNumbers, setLineNumbers]     = useState(true);
  const [textArea, setTextArea]           = useState('');
  const [dragOver, setDragOver]           = useState(false);
  const [posting, setPosting]             = useState(false);
  const [posted, setPosted]               = useState(false);
  const [postedPath, setPostedPath]       = useState('');
  const [toast, setToast]                 = useState('');
  const [toastVisible, setToastVisible]   = useState(false);
  const [toastType, setToastType]         = useState('info');

  const fileInputRef = useRef(null);
  const viewerRef    = useRef(null);
  const toastTimer   = useRef(null);

  const showToast = (msg, type = 'info', duration = 3000) => {
    setToast(msg);
    setToastType(type);
    setToastVisible(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVisible(false), duration);
  };

  const escapeHtml = (str) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const renderContent = (text, name) => {
    setCurrentText(text);
    setFileName(name);
    setViewerVisible(true);
    setPosted(false);
    setPostedPath('');
    setTimeout(() => {
      viewerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => renderContent(e.target.result, file.name);
    reader.readAsText(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (!file) return;
    if (!file.name.endsWith('.txt') && file.type !== 'text/plain') {
      showToast('⚠️ Only .txt files are supported', 'error');
      return;
    }
    readFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) readFile(file);
  };

  const handleLoadText = () => {
    if (!textArea.trim()) { showToast('⚠️ Nothing to display', 'error'); return; }
    renderContent(textArea, 'pasted-text.txt');
  };

  const handleClose = () => {
    setViewerVisible(false);
    setTextArea('');
    setCurrentText('');
    setPosted(false);
    setPostedPath('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText)
      .then(() => showToast('✓ Copied to clipboard', 'info'));
  };

  const handlePost = async () => {
    if (!currentText) return;
    if (!pat.trim()) { showToast('⚠️ Please enter your GitHub PAT first', 'error'); return; }
    setPosting(true);
    try {
      const savedPath = await commitToGitHub(pat.trim(), fileName, currentText);
      setPosted(true);
      setPostedPath(savedPath);
      showToast('✓ Committed to GitHub!', 'success');
    } catch (err) {
      showToast(`✗ ${err.message}`, 'error');
    } finally {
      setPosting(false);
    }
  };

  const lines     = currentText.split('\n');
  const wordCount = currentText.trim() ? currentText.trim().split(/\s+/).length : 0;

  return (
    <>
      <Head>
        <title>TextDrop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0e0e0f; --surface: #17171a; --border: #2a2a30;
          --accent: #c8f060; --text: #e8e8ec; --muted: #6b6b78;
          --success: #4ade80; --error: #ff5f57; --blue: #60a5fa;
        }
        .td-page {
          background: var(--bg); color: var(--text); font-family: 'Syne', sans-serif;
          min-height: 100vh; display: flex; flex-direction: column;
          align-items: center; padding: 48px 24px; overflow-x: hidden; position: relative;
        }
        .td-page::before {
          content: ''; position: fixed; inset: 0;
          background-image: linear-gradient(rgba(200,240,96,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,240,96,0.03) 1px, transparent 1px);
          background-size: 40px 40px; pointer-events: none; z-index: 0;
        }
        .td-wrapper { width: 100%; max-width: 820px; position: relative; z-index: 1; }

        /* Header */
        .td-header { margin-bottom: 36px; animation: slideDown 0.5s ease both; }
        .td-header h1 { font-size: clamp(2rem,5vw,3rem); font-weight: 800; letter-spacing: -0.04em; }
        .td-header h1 span { color: var(--accent); }
        .td-header p { font-family: 'DM Mono', monospace; font-size: 0.78rem; color: var(--muted); letter-spacing: 0.04em; margin-top: 4px; }

        /* Repo info bar */
        .repo-bar {
          display: flex; align-items: center; gap: 8px; margin-bottom: 20px;
          padding: 10px 16px; background: var(--surface); border: 1px solid var(--border);
          border-radius: 10px; font-family: 'DM Mono', monospace; font-size: 0.74rem;
          color: var(--muted); animation: fadeIn 0.4s ease both;
        }
        .repo-bar span { color: var(--accent); }
        .repo-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); opacity: 0.6; flex-shrink: 0; }

        /* PAT input */
        .pat-section {
          margin-bottom: 20px; animation: fadeIn 0.4s 0.05s ease both;
        }
        .pat-label {
          font-family: 'DM Mono', monospace; font-size: 0.72rem; color: var(--muted);
          letter-spacing: 0.06em; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;
        }
        .pat-label a { color: var(--blue); text-decoration: underline; text-underline-offset: 3px; font-size: 0.68rem; }
        .pat-row { display: flex; gap: 8px; }
        .pat-input {
          flex: 1; background: var(--surface); border: 1.5px solid var(--border);
          border-radius: 10px; color: var(--text); font-family: 'DM Mono', monospace;
          font-size: 0.82rem; padding: 10px 16px; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .pat-input::placeholder { color: var(--muted); }
        .pat-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(200,240,96,0.08); }
        .pat-input.filled { border-color: rgba(74,222,128,0.4); }
        .td-btn-sm {
          font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.76rem;
          border: 1.5px solid var(--border); background: transparent; color: var(--muted);
          border-radius: 8px; padding: 8px 14px; cursor: pointer;
          transition: border-color 0.15s, color 0.15s; white-space: nowrap;
        }
        .td-btn-sm:hover { border-color: var(--accent); color: var(--accent); }

        /* Drop zone */
        .drop-zone {
          border: 1.5px dashed var(--border); border-radius: 16px; padding: 48px 32px;
          text-align: center; cursor: pointer; transition: border-color 0.2s, background 0.2s, transform 0.15s;
          background: var(--surface); position: relative; overflow: hidden;
          animation: fadeIn 0.5s 0.1s ease both;
        }
        .drop-zone::after {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(200,240,96,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .drop-zone:hover, .drop-zone.drag-over { border-color: var(--accent); background: #1b1c1f; transform: translateY(-2px); }
        .drop-zone.drag-over { background: #1d201a; }
        .drop-icon { font-size: 2.4rem; margin-bottom: 12px; display: block; transition: transform 0.2s; }
        .drop-zone:hover .drop-icon { transform: scale(1.1) translateY(-4px); }
        .drop-zone h2 { font-size: 1.1rem; font-weight: 700; margin-bottom: 6px; letter-spacing: -0.02em; }
        .drop-zone p { font-family: 'DM Mono', monospace; font-size: 0.76rem; color: var(--muted); }
        .drop-zone p span { color: var(--accent); cursor: pointer; text-decoration: underline; text-underline-offset: 3px; }

        /* Text input */
        .text-input-section { margin-top: 16px; animation: fadeIn 0.5s 0.15s ease both; }
        .divider { display: flex; align-items: center; gap: 12px; margin: 18px 0; color: var(--muted); font-family: 'DM Mono', monospace; font-size: 0.72rem; letter-spacing: 0.08em; }
        .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }
        .td-textarea { width: 100%; min-height: 120px; background: var(--surface); border: 1.5px solid var(--border); border-radius: 12px; color: var(--text); font-family: 'DM Mono', monospace; font-size: 0.84rem; line-height: 1.7; padding: 16px 20px; resize: vertical; outline: none; transition: border-color 0.2s, box-shadow 0.2s; }
        .td-textarea::placeholder { color: var(--muted); }
        .td-textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(200,240,96,0.08); }
        .btn-row { display: flex; gap: 10px; margin-top: 12px; justify-content: flex-end; }
        .td-btn { font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.82rem; letter-spacing: 0.02em; border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer; transition: transform 0.15s, opacity 0.15s, box-shadow 0.15s; }
        .td-btn:disabled { opacity: 0.45; cursor: not-allowed; }
        .td-btn:active:not(:disabled) { transform: scale(0.97); }
        .btn-primary { background: var(--accent); color: #0e0e0f; }
        .btn-primary:hover:not(:disabled) { opacity: 0.88; box-shadow: 0 4px 20px rgba(200,240,96,0.25); }
        .btn-ghost { background: transparent; border: 1.5px solid var(--border); color: var(--muted); }
        .btn-ghost:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }

        /* Viewer */
        .viewer { margin-top: 32px; animation: slideUp 0.4s ease both; }
        .viewer-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; gap: 12px; flex-wrap: wrap; }
        .file-info { display: flex; align-items: center; gap: 10px; }
        .file-badge { background: rgba(200,240,96,0.12); border: 1px solid rgba(200,240,96,0.25); color: var(--accent); font-family: 'DM Mono', monospace; font-size: 0.72rem; padding: 4px 10px; border-radius: 999px; letter-spacing: 0.04em; }
        .file-name { font-family: 'DM Mono', monospace; font-size: 0.78rem; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; }
        .stats { font-family: 'DM Mono', monospace; font-size: 0.72rem; color: var(--muted); display: flex; gap: 16px; }
        .stats span { white-space: nowrap; } .stats b { color: var(--text); }
        .viewer-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .toggle-label { display: flex; align-items: center; gap: 6px; font-family: 'DM Mono', monospace; font-size: 0.72rem; color: var(--muted); cursor: pointer; user-select: none; margin-right: 4px; }
        .toggle-label input { accent-color: var(--accent); }
        .content-box { background: var(--surface); border: 1.5px solid var(--border); border-radius: 14px; padding: 28px 32px; font-family: 'DM Mono', monospace; font-size: 0.83rem; line-height: 1.85; color: var(--text); white-space: pre-wrap; word-break: break-word; max-height: 480px; overflow-y: auto; }
        .content-box::-webkit-scrollbar { width: 6px; }
        .content-box::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
        .content-box.lined { padding-left: 64px; counter-reset: line; }
        .line { display: block; counter-increment: line; position: relative; }
        .line::before { content: counter(line); position: absolute; left: -44px; color: var(--muted); opacity: 0.5; font-size: 0.72rem; line-height: 1.85; text-align: right; width: 32px; user-select: none; }

        /* Post bar */
        .post-bar {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 12px; padding: 12px 16px; background: var(--surface);
          border: 1.5px solid var(--border); border-radius: 10px; flex-wrap: wrap; gap: 10px;
        }
        .post-bar.success-bar { border-color: rgba(74,222,128,0.3); }
        .post-bar-left { display: flex; flex-direction: column; gap: 3px; }
        .post-bar-label { font-family: 'DM Mono', monospace; font-size: 0.74rem; color: var(--muted); }
        .post-bar-label b { color: var(--text); }
        .posted-path { font-family: 'DM Mono', monospace; font-size: 0.68rem; color: var(--success); }
        .post-bar-right { display: flex; align-items: center; gap: 10px; }
        .btn-post { background: transparent; border: 1.5px solid var(--accent); color: var(--accent); display: flex; align-items: center; gap: 6px; font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.82rem; border-radius: 8px; padding: 10px 20px; cursor: pointer; transition: background 0.15s, box-shadow 0.15s, transform 0.15s; }
        .btn-post:hover:not(:disabled) { background: rgba(200,240,96,0.08); box-shadow: 0 4px 16px rgba(200,240,96,0.12); }
        .btn-post:active:not(:disabled) { transform: scale(0.97); }
        .btn-post:disabled { opacity: 0.45; cursor: not-allowed; }
        .btn-post.posted { border-color: var(--success); color: var(--success); }
        .spinner { width: 12px; height: 12px; border: 2px solid rgba(200,240,96,0.3); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.7s linear infinite; display: inline-block; }

        /* Toast */
        .td-toast { position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%) translateY(80px); background: var(--surface); border: 1px solid var(--border); color: var(--text); font-family: 'DM Mono', monospace; font-size: 0.78rem; padding: 12px 20px; border-radius: 10px; opacity: 0; transition: transform 0.3s ease, opacity 0.3s ease; z-index: 99; white-space: nowrap; pointer-events: none; }
        .td-toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }
        .td-toast.success { border-color: rgba(74,222,128,0.4); color: var(--success); }
        .td-toast.error { border-color: rgba(255,95,87,0.4); color: var(--error); }

        @keyframes slideDown { from { opacity:0; transform:translateY(-16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="td-page">
        <div className="td-wrapper">

          {/* Header */}
          <header className="td-header">
            <h1>Text<span>Drop</span></h1>
            <p>paste or drop a .txt — commit it straight to GitHub</p>
          </header>

          {/* Repo info bar */}
          <div className="repo-bar">
            <div className="repo-dot" />
            <span>{GH_OWNER}/{GH_REPO}</span>
            <span style={{color:'var(--muted)'}}>→</span>
            <span>/posts</span>
            <span style={{color:'var(--muted)'}}>on</span>
            <span>{GH_BRANCH}</span>
          </div>

          {/* PAT input */}
          <div className="pat-section">
            <div className="pat-label">
              GITHUB PERSONAL ACCESS TOKEN
              <a href="https://github.com/settings/tokens/new?scopes=repo&description=TextDrop" target="_blank" rel="noreferrer">
                generate one ↗
              </a>
            </div>
            <div className="pat-row">
              <input
                className={`pat-input${pat ? ' filled' : ''}`}
                type={patVisible ? 'text' : 'password'}
                placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                value={pat}
                onChange={(e) => setPat(e.target.value)}
                spellCheck={false}
              />
              <button className="td-btn-sm" onClick={() => setPatVisible(v => !v)}>
                {patVisible ? 'Hide' : 'Show'}
              </button>
              {pat && (
                <button className="td-btn-sm" onClick={() => setPat('')}>Clear</button>
              )}
            </div>
          </div>

          {/* Drop zone */}
          <div
            className={`drop-zone${dragOver ? ' drag-over' : ''}`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
          >
            <span className="drop-icon">📄</span>
            <h2>Drop your .txt file here</h2>
            <p>Drag &amp; drop, or <span onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>browse files</span></p>
            <input ref={fileInputRef} type="file" accept=".txt,text/plain" style={{ display:'none' }} onChange={handleFileChange} />
          </div>

          {/* Paste text */}
          <div className="text-input-section">
            <div className="divider">OR PASTE TEXT</div>
            <textarea
              className="td-textarea"
              placeholder="Paste or type your text here..."
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
            />
            <div className="btn-row">
              <button className="td-btn btn-ghost" onClick={() => setTextArea('')}>Clear</button>
              <button className="td-btn btn-primary" onClick={handleLoadText}>View Text →</button>
            </div>
          </div>

          {/* Viewer */}
          {viewerVisible && (
            <div className="viewer" ref={viewerRef}>
              <div className="viewer-header">
                <div className="file-info">
                  <span className="file-badge">TXT</span>
                  <span className="file-name">{fileName}</span>
                </div>
                <div className="stats">
                  <span><b>{lines.length}</b> lines</span>
                  <span><b>{wordCount}</b> words</span>
                  <span><b>{currentText.length}</b> chars</span>
                </div>
                <div className="viewer-actions">
                  <label className="toggle-label">
                    <input type="checkbox" checked={lineNumbers} onChange={(e) => setLineNumbers(e.target.checked)} /> lines
                  </label>
                  <button className="td-btn btn-ghost" onClick={handleCopy}>Copy</button>
                  <button className="td-btn btn-ghost" onClick={handleClose}>✕</button>
                </div>
              </div>

              <div
                className={`content-box${lineNumbers ? ' lined' : ''}`}
                dangerouslySetInnerHTML={{
                  __html: lines.map(l => `<span class="line">${escapeHtml(l) || ' '}</span>`).join('')
                }}
              />

              {/* Post bar */}
              <div className={`post-bar${posted ? ' success-bar' : ''}`}>
                <div className="post-bar-left">
                  <span className="post-bar-label">
                    Commit <b>{fileName}</b> → <b>/{GH_REPO}/posts/</b>
                  </span>
                  {posted && (
                    <span className="posted-path">✓ {postedPath}</span>
                  )}
                </div>
                <div className="post-bar-right">
                  <button
                    className={`btn-post${posted ? ' posted' : ''}`}
                    onClick={handlePost}
                    disabled={posting || posted}
                  >
                    {posting && <span className="spinner" />}
                    {posted ? '✓ Committed!' : posting ? 'Committing…' : '↑ Commit to GitHub'}
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        <div className={`td-toast${toastVisible ? ' show' : ''}${toastVisible ? ` ${toastType}` : ''}`}>
          {toast}
        </div>
      </div>
    </>
  );
}