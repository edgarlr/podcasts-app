import { InferGetStaticPropsType } from 'next'
import { getRecommendedChannels } from 'lib/api'
import { useFavs } from 'lib/hooks/use-favs'
import { useIsMobile } from 'lib/hooks/use-media-queries'
import Layout from 'components/common/Layout'
import { ChannelsGrid } from 'components/channel/ChannelsGrid'
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel'
import ChannelsList from 'components/channel/ChannelList'

export async function getStaticProps() {
  const channels: TChannel[] = await getRecommendedChannels()
  return { props: { channels } }
}

export default function Home({
  channels,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { favs } = useFavs()
  const isMobile = useIsMobile()

  return (
    <Layout navigation={false}>
      <ChannelsCarousel title="Followed" channels={favs} />

      {isMobile ? (
        <>
          <ChannelsCarousel title="featured" channels={channels.slice(0, 6)} />
          <ChannelsGrid title="trending" channels={channels.slice(7, 13)} />
          <ChannelsGrid title="Last added" channels={channels.slice(14)} />
        </>
      ) : (
        <>
          <h2>Explore</h2>
          <div className="list-container">
            <ChannelsList title="Trending" channels={channels.slice(7, 13)} />
            <ChannelsList title="Last Added" channels={channels.slice(14)} />
          </div>
          <ChannelsCarousel title="Featured" channels={channels.slice(0, 6)} />
        </>
      )}

      <style jsx>{`
        .list-container {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 5rem;
        }
        h2 {
          margin: 0;
          padding: 1rem 0 0;
          font-size: 1.8rem;
        }
      `}</style>
    </Layout>
  )
}
