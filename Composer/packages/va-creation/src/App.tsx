import { initializeIcons } from '@uifabric/icons';
import { mergeStyles } from '@uifabric/merge-styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './packages/app/components/navigationBar';
import Sidebar from './packages/app/components/sideBar';
import { BotSettingsPage } from './packages/botSettings/botSettingsPage';
import { CreationExperiencePage } from './packages/creationExperience/components/creationExperiencePage';
import { Home } from './packages/home/home';
import WebChatEditor from './packages/webchatEditor/components/webChatEditor';

export class VACreationApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    initializeIcons();
  }

  render() {
    // TODO: uniform styling tactic
    let leftGridClassName = mergeStyles({ width: '5% !important' });

    let rightGridClassName = mergeStyles({
      width: '95% !important',
      paddingRight: '0px !important',
    });

    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Sidebar />
          <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
              <div className={'ms-Grid-col ms-sm6 ms-md4 ms-lg2 ' + leftGridClassName} />
              <div className={'ms-Grid-col ms-sm6 ms-md8 ms-lg10 ' + rightGridClassName}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/botSettings" component={BotSettingsPage} />
                  <Route path="/webChatEditor" component={WebChatEditor} />
                  <Route path="/botSettings" component={BotSettingsPage} />
                  <Route path="/creationExperience" component={CreationExperiencePage} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default VACreationApp;