import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/" className="item">
        <a>CrowdCoin</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/" className="item">
          <a>Campaigns</a>
        </Link>

        <Link route="/campaigns/new" className="item">
          <a> +</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
