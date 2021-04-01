import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {goBack, openPopout, closePopout, openModal} from "../../store/router/actions";
import * as VK from '../../services/VK';

import {renderGroupsList} from '../../services/renderers';

import {Div, List, Panel, Group, Button, PanelHeader, PanelSpinner, PanelHeaderBack, Header} from "@vkontakte/vkui";

    const Home = (props) => (

        <Panel id={props.id} separator={false}>
            <PanelHeader>Hello Хуесос.</PanelHeader>
            <Div><h2>Hello My World Down!</h2></Div>
            

        </Panel>



    );

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default Home;
