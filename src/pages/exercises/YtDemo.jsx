
export default function YtDemo({ ytVdo }) {

    return (
        <section className="yt-demo section-padding">
            <div className="section-heading">
                <h1>Watch Youtube Tutorial</h1>
            </div>
            <div className="card-container">
                {ytVdo?.slice(0, 8).map(item => {
                    return (
                        <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`} className="yt-card outline" key={item.video.videoId} target="_blank" rel="noreferrer">
                            <div className="img-box">
                                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                                <div className="faded-layer"></div>
                            </div>
                            <div className="info-box">
                                <div className="title">{item.video.title}</div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}
