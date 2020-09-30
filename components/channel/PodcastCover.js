import Link from 'next/link';
import { fontWeight, colors } from 'styles/theme';
import { channelPropType, channelShortPropType } from 'lib/customPropTypes';
import { oneOfType } from 'prop-types';

export const PodcastCover = ({ channel }) => {
  return (
    <div>
      <Link href="/channels/[channelId]" as={`/channels/${channel.id}`}>
        <a className="channel">
          <img src={channel.urls.logo_image.original} alt={channel.title} />
          <h2>{channel.title}</h2>
        </a>
      </Link>

      <style jsx>{`
        a {
          color: ${colors.darkGray};
        }
        h2 {
          font-weight: ${fontWeight.regular};
        }
      `}</style>

      <style jsx>{`
        .channel {
          display: block;
          border-radius: 3px;
          margin: 0;
        }
        img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.05);
          background: ${colors.lightGray};
        }
        a {
          text-decoration: none;
        }
        h2 {
          padding: 0;
          margin: 8px 0 0;
          font-size: 0.9rem;
          text-align: center;
          overflow: hidden;
          line-height: 1.4;
          height: 2.8em;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </div>
  );
};

PodcastCover.propTypes = {
  channel: oneOfType([channelShortPropType, channelPropType]),
};
