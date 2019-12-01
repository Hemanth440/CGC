import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core ../../components/content
import GridItem from "../../components/content/Grid/GridItem.js";
import GridContainer from "../../components/content/Grid/GridContainer.js";
import Tasks from "../../components/content/Tasks/Tasks.js";
import Card from "../../components/content/Card/Card.js";
import CardHeader from "../../components/content/Card/CardHeader.js";
import CardBody from "../../components/content/Card/CardBody";

import { bugs } from "../../variables/general.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function TaskList() {  
    const classes = useStyles();    
  return (
    <div>          
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Task List (50)</h4>              
                </CardHeader>
                <CardBody>
                    <Tasks
                        hasCheckbox={false}            
                        tasksIndexes={[0, 1, 2, 3]}
                        tasks={bugs}
                    />
                </CardBody>
          </Card>        
        </GridItem>        
      </GridContainer>
    </div>
  );
}
