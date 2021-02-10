import Close from '@components/icons/Close'
import Share from '@components/icons/Share'
import Twitter from '@components/icons/Twitter'
import Facebook from '@components/icons/Facebook'
import { useState, useEffect, useRef, MouseEvent } from 'react'
import IconButton from './ui/IconButton'
import { SITE_URL } from '@lib/constants'
import ExternalLink from './ui/ExternalLink'
import { useToast } from '@lib/hooks/use-toast'
import Copy from './icons/Copy'

type Props = {
  title: string
  path: string
  message?: string
}

const ShareButton = ({ title, path, message = 'Chech this link' }: Props) => {
  const [showShare, setShowShare] = useState(false)

  const { addToast } = useToast()

  const shareMenuRef = useRef<HTMLDivElement>(null)

  const fullURL = `${SITE_URL}${path}`

  const onShareClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: message,
          url: fullURL,
        })
        .catch(console.error)
    } else {
      setShowShare(!showShare)
    }
  }

  const onCopyToClipboard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(fullURL)
        .then(() => addToast('Copied to the clipboard'))
        .catch(console.error)
    }
  }

  // useEffect(() => {
  //   const onOutsideClick = (e: any) => {
  //     console.log('hola')
  //     if (
  //       showShare &&
  //       shareMenuRef.current &&
  //       !shareMenuRef.current.contains(e.target)
  //     ) {
  //       setShowShare(false)
  //     }
  //   }

  //   document.addEventListener('click', onOutsideClick)
  //   return () => document.removeEventListener('click', onOutsideClick)
  // }, [])

  return (
    <div className="container" ref={shareMenuRef}>
      <IconButton onClick={onShareClick} ariaLabel="Share" variant="tertiary">
        {showShare ? <Close /> : <Share />}
      </IconButton>

      {showShare && (
        <div className="menu">
          <p className="title">Share</p>
          <ul className="list">
            <li>
              <button
                aria-label="Share on facebook"
                className="link-element"
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${fullURL}`,
                    'facebook-share-dialog',
                    'width=800,height=600'
                  )
                }
              >
                Share on Facebook
                <Facebook
                  width={20}
                  height={20}
                  style={{ marginLeft: 'auto' }}
                />
              </button>
            </li>
            <li>
              <ExternalLink
                ariaLabel="Share on twitter"
                to={`https://twitter.com/intent/tweet?url=${fullURL}&text=${title}`}
                className="link-element"
              >
                Share on Twitter
                <Twitter
                  width={20}
                  height={20}
                  style={{ marginLeft: 'auto' }}
                />
              </ExternalLink>
            </li>
            <li>
              <button
                className="copy-clipboard"
                onClick={onCopyToClipboard}
                aria-label="Copy to clipboard"
                title={fullURL}
              >
                {fullURL}
                <span className="clipboard-icon">
                  <Copy width={16} height={16} />
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}

      <style jsx>{`
        .container {
          position: relative;
        }
        .menu {
          position: absolute;
          z-index: 20;
          left: 0;
          margin-top: 0.5rem;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          border-radius: 15px;
          background: var(--secondary);
          box-shadow: var(--default-shadow);
          border: var(--default-border);
        }
        .title {
          padding: 0 1.5rem;
          margin: 0.25rem 0 0.5rem 0;
          font-weight: bold;
          font-size: var(--font-sm);
        }
        .list {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          border-radius: 15px;
        }
        .list li {
          list-style: none;
          padding: 0.75rem 1.5rem;
          cursor: pointer;
        }
        .list li:hover {
          background: var(--primary-05);
        }
        .list > li :global(.link-element) {
          font-size: var(--font-sm);
          color: var(--primary);
          padding: 0;
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .copy-clipboard {
          max-width: 14rem;
          border: var(--default-border);
          border-radius: 10px;
          transition: border 0.15s;
          margin: -0.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0.75rem 2.25rem 0.75rem 0.5rem;
          font-size: var(--font-sm);
          color: var(--primary-80);
          position: relative;
        }
        .clipboard-icon {
          color: var(--primary);
          position: absolute;
          right: 0;
          padding: 0 0.75rem;
          line-height: 0.5;
        }
        .copy-clipboard:hover {
          border: 1px solid var(--primary-50);
          background: var(--secondary);
          color: var(--primary);
        }
      `}</style>
    </div>
  )
}

export default ShareButton
