export interface YoutubeProps {
  title: string;
  uid: string;
}

const Youtube = (props: YoutubeProps) => {
  return (
    <div className="youtube-embed">
      <iframe
        src={`https://www.youtube.com/embed/${props.uid}`}
        width="100%"
        height="500px"
        title={props.title}
      ></iframe>
    </div>
  );
};

export default Youtube;
