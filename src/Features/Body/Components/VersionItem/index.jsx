import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";


VersionItem.propTypes = {
    version: PropTypes.string,
    date: PropTypes.string
};
VersionItem.defaultProps = {
    version:null,
    date:null
};
function VersionItem(props) {

    const {version,date,link} = props;
    return (
        <>
          <a href={'#'+link}>
            <div className="row version">
                    <div className="col-lg-6">
                    {version}
                    </div>
                    <div className="col-lg-6">
                    {date}
                    </div>
            </div>
            </a>
        </>
    );
}

export default VersionItem;