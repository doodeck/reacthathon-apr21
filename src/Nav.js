import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul class="nav">
      <li>
        <Link to="/">Live</Link>
      </li>
      <li>
        <Link to="/recordings">Recordings</Link>
      </li>
    </ul>
  );
}
