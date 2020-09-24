import { colors, fontWeight } from "styles/theme"

export const SectionTitle = ({title, button = null}) => {
  return (
    <div className='section-title'>
      <h3 className='main-title'>{title}</h3>

      { button }

      <style jsx>{`
        .section-title {
          border-bottom: 1px solid ${colors.lightGray};
        }
        .main-title {
          font-weight: ${fontWeight.bold};
          color: ${colors.gray};
        } 
      `}</style>
      
      <style jsx>{`
        .section-title {
          display: flex;
          justify-content: space-between;
          align-content: center;
          padding: 1rem 0;
        }
        .main-title {
          font-size: .7rem;
          text-transform: uppercase;
          margin: auto 0;
        }  
      `}</style>
    </div>
  )
}

// export default SectionTitle
