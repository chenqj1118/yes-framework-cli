/*
 * @Author: gmf
 * @Date:   2016-05-13 09:12:40
 * @Last Modified by:   gmf
 * @Last Modified time: 2016-06-15 09:27:35
 */
// import App from './app/scm'
// import App from './cmcc'
import { start } from 'yes-web';
import 'antd-mobile/dist/antd-mobile.css';
import { App } from "yes-comp-react-native-web";
import { createAppOptions, createEmbedOptions } from "yes-framework";
import './src/patch';
import billforms from './src/config/billforms';
import ProjectCfg from './src/config/project.json';
import LoginCfg from './src/config/login.json';
import RouteCfg from './src/config/route.json';
import controls from './src/config/control';
import util from './src/util';
import openWith from './src/config/openwith';
import ModalCfg from './src/config/modal.json';
import FormPara from './src/formpara';

const app = new App(
    createAppOptions(
        ProjectCfg, RouteCfg, LoginCfg, ModalCfg,
        openWith, billforms, controls, util, FormPara
    )
);

window.showForm = (id, formKey, oid, status) => {
   const embedApp = new App(
       createEmbedOptions(
           id,
           {
               formKey,
               oid,
               status,
           },
           ProjectCfg, 
           LoginCfg,
           controls,
           billforms
       )
   );
}
