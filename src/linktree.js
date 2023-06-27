
const Link = ({label, value}) => {
  return (
    <div>
      <a 
        style={{
          cursor: 'pointer',
          display: 'inline-block',
          padding: '10px 20px',
          fontSize: '16px',
          textAlign: 'center',
          textDecoration: 'none',
          backgroundColor: '#4CAF50',
          color: '#FFFFFF',
          borderRadius: '4px',
          border: 'none',
          transition: 'background-color 0.3s ease',
          margin: '16px'
        }}
        href={value}
        target="_blank"
      >{label}</a>
    </div>
  )
}

const LinkTree = () => {

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1> Tripp Gordon </h1>
      <Link label="soundcloud" value="https://soundcloud.com/trippgordon/"/>
      <Link label="spotify" value="https://open.spotify.com/artist/1GGPeev4cbtwA0VFQM4dxC?si=T7SxAcd_SMWS1VVUzt3hSA"/>
      <Link label="apple music" value="https://music.apple.com/us/artist/tripp-gordon/1464057297"/>
      <Link label="insta" value="https://www.instagram.com/trippgordon_/"/>
      <Link label="youtube" value="https://www.youtube.com/@trippgordon_"/>
      <Link label="twitter" value="https://twitter.com/trippgordon_/"/>
      <Link label="facebook" value="https://www.facebook.com/trippgordonmusic/"/>
      <Link label="tiktok" value="https://www.tiktok.com/@trippgordon_/"/>
      
    </div>
  )
}

export default LinkTree
