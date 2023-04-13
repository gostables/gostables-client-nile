import React from "react";

const NetworkNotSupported = () => {
  return (
    <div className="alert alert-primary mt-5 text-center text-black" role="alert">
      <h4 className="alert-heading">Network not supported...</h4>
      <p>
        This version of goStables Protocol is currently deployed on <strong>Tron Nile Testnet.</strong><br/>
        Please switch your TronLink to Nile Testnet network to continue.<br/>
        If you want to use the Mainnet version please go to <a href="https://app.gostables.org">https://app.gostables.org</a>
      </p>
    </div>
  );
};

export default NetworkNotSupported;
