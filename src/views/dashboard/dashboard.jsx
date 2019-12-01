import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/content/Grid/GridItem.js";
import GridContainer from "../../components/content/Grid/GridContainer.js";
import Card from "../../components/content/Card/Card.js";
import CardHeader from "../../components/content/Card/CardHeader.js";
import CardIcon from "../../components/content/Card/CardIcon.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Link } from "@material-ui/core";

import dashboardRoutes from './dashboardRoutes';

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        {
          dashboardRoutes.map((prop, key) => (
            <GridItem xs={6} sm={6} md={3} key={key}>
              <Link
                  href={prop.layout + prop.path}
                >
                <Card className={classes.card}>
                  <CardHeader color={prop.color} stats icon>
                    <CardIcon color={prop.color}>
                      <prop.icon />
                    </CardIcon>
                    <p className={classes.cardCategory}>{prop.title}</p>
                    <h3 className={classes.cardTitle}>{prop.count}</h3>
                  </CardHeader>            
                </Card>
              </Link>        
            </GridItem>
          )
        )  
      }                     
    </GridContainer>      
  </div>
  );
}
