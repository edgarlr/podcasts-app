import Forward30 from 'components/icons/Forward30'
import Replay30 from 'components/icons/Replay30'
import PlayArrow from 'components/icons/PlayArrow'

const FullPlayerSkeleton = () => {
  return (
    <div className="container">
      <div className="img-container" />

      <div className="info">
        <div className="title-text" />
        <div className="channel-text" />
      </div>

      <div className="main-player">
        <button disabled className="controller-button">
          <Replay30 />
        </button>
        <button disabled className="play-button">
          <PlayArrow />
        </button>
        <button disabled className="controller-button">
          <Forward30 />
        </button>
      </div>
      <div className="progress-bar" />
      <div className="progress-time">
        <div>00:00</div>
        <div>00:00</div>
      </div>

      <style jsx>{`
        .progress-bar,
        .img-container,
        .title-text,
        .channel-text {
          background: var(--gray-80);
        }
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2em 2em 0;
          height: 70%;
        }
        .img-container {
          width: 80%;
          max-width: 250px;
          padding-bottom: 80%;
          margin: auto;
          border-radius: 20px;
        }
        .info {
          width: 90%;
          margin: 0 auto 5rem;
        }
        .title-text {
          margin: 10px auto;
          height: 14px;
          width: 100%;
          border-radius: 5px;
        }
        .channel-text {
          margin: 10px auto;
          height: 14px;
          width: 60%;
          border-radius: 5px;
        }
        button[disabled] {
          outline: none;
          opacity: 0.3;
        }
        .main-player {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 10%;
        }
        .controller-button {
          background: none;
          border: none;
        }
        .play-button {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: none;
          border: 1px solid var(--white);
        }
        .progress-bar {
          width: 100%;
          height: 4px;
          margin-bottom: 1rem;
        }
        .progress-time {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: var(--gray-50);
        }
      `}</style>
    </div>
  )
}

export default FullPlayerSkeleton