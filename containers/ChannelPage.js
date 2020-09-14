import { useState, useEffect } from 'react';
import MainTitle from 'components/MainTitle';
import PodcastCover from 'components/PodcastCover';
import Layout from 'components/Layout';
import EpisodeListContainer from 'components/EpisodeListContainer';
import GridCarousel from 'components/GridCarousel';
import { SectionTitle } from 'components/SectionTitle';
import BannerImage from 'components/BannerImage';
import { colors } from 'styles/theme';
import FollowButtonContainer from 'components/FollowButtonContainer';

const ChannelPage = ({channel, audioClips, series }) => {
  const [bannerImage, setBannerImage] = useState({})

  useEffect(() => {  
    if (channel.urls.banner_image.original === null) {
      setBannerImage(channel.urls.logo_image.original);
    } else {
      setBannerImage(channel.urls.banner_image.original)
    }

  }, [])

  return (
    <Layout 
      navigation={true}
      headerText={channel.title}
      button={<FollowButtonContainer channel={channel} />}
    >

      <MainTitle
        title={channel.title}
        subtitle={`serie de ${channel.parent_channel_id}`}
      />

      <BannerImage bannerImage={bannerImage} />

      {series.length > 0 && (
        <section>
          <SectionTitle title={`${channel.title}'S SERIES`} />
          <GridCarousel >
            {series.map((channel, index) => (
              <PodcastCover channel={channel} index={index} key={index}/>
            ))}
          </GridCarousel>
        </section>
      )}

      <EpisodeListContainer audioClips={audioClips} />
      
      <style jsx>{`
        a.channel {
          color: ${colors.darkGray};
        }
      `}</style>

      <style jsx>{`
        .channels {
          display: grid;
          grid-gap: 10px;
          padding: 15px 36px;
          grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
        }
        a.channel {
          display: block;
          margin-bottom: 0.5em;
          text-decoration: none;
        }
        .channel img {
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
          width: 100%;
        }
        h1 {
          padding: 15px;
        }
      `}</style>
    </Layout>
  )
}

export default ChannelPage