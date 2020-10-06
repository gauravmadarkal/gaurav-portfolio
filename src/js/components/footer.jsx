import React from "react";
import { aboutme, socialMediaProviders } from "../../assets/datastore";
export default function Footer() {
  return (
    <footer>
      <p className="footer">
        {socialMediaProviders.map((provider) => {
          return (
            <a class="footerIcons" href={aboutme.socialMediaLinks[provider]}>
              <i class={"fa fa-" + provider + " fa-2x"}></i>
            </a>
          );
        })}
      </p>
    </footer>
  );
}
