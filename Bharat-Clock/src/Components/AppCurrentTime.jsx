function AppCurrentTime() {
  let time = new Date();

  return (
    <p className="lead">
      This is current time in Bharat : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default AppCurrentTime;
