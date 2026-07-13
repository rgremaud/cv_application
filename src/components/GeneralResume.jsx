
export default function ResumeGeneral(props) {
  return (
    <div id="generalInfo">
      <h3>{props.firstName}</h3>
      <h3>{props.lastName}</h3>
      <h3>{props.email}</h3>
      <h3>{props.phone}</h3>
    </div>
  );
}
