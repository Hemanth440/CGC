import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import AddCircle from "@material-ui/icons/AddCircle";
// core ../../components/content
import GridItem from "../../components/content/Grid/GridItem.js";
import GridContainer from "../../components/content/Grid/GridContainer.js";
import Tasks from "../../components/content/Tasks/Tasks.js";
import Card from "../../components/content/Card/Card.js";
import CardHeader from "../../components/content/Card/CardHeader.js";
import CardBody from "../../components/content/Card/CardBody";
import CardFooter from "../../components/content/Card/CardFooter";
import CardIcon from "../../components/content/Card/CardIcon";

import { bugs } from "../../variables/general.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function AreaList() {  
    const classes = useStyles();    
  return (
    <div>          
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="rose">
                    <h4 className={classes.cardTitleWhite}>Area List (150)</h4>              
                </CardHeader>
                <CardBody>
                    <Tasks
                        hasCheckbox 
                        checkedIndexes={[1, 3]}           
                        tasksIndexes={[0, 1, 2, 3]}
                        tasks={bugs}
                    />
                </CardBody>
                <CardFooter className={classes.cardAction}>
                    <CardIcon>
                        <AddCircle />
                    </CardIcon>
                </CardFooter>
          </Card>        
        </GridItem>        
      </GridContainer>
    </div>
  );
}
