import React from 'react';
import ChartistGraph from "react-chartist";
import { makeStyles } from '@material-ui/core/styles';
import Assessment from "@material-ui/icons/Assessment";
import Assignment from "@material-ui/icons/Assignment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

import GridItem from "../../components/content/Grid/GridItem.js";
import GridContainer from "../../components/content/Grid/GridContainer.js";
import Card from "../../components/content/Card/Card.js";
import CardHeader from "../../components/content/Card/CardHeader.js";
import CardBody from "../../components/content/Card/CardBody";
import CardFooter from "../../components/content/Card/CardFooter";
import CardAvatar from "../../components/content/Card/CardAvatar";
import CustomInput from "../../components/content/CustomInput/CustomInput.js";
import Tasks from "../../components/content/Tasks/Tasks.js";
import CustomTabs from "../../components/content/CustomTabs/CustomTabs.js";
import Button from "../../components/content/CustomButtons/Button.js";
import avatar from "../../assets/img/faces/marc.jpg";
import { bugs, website } from "../../variables/general.js";
import { dailySalesChart } from "../../variables/charts.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(theme => ({
  ...styles,
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ChildDetails() {
  const classes = useStyles();

  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>      
            <form className={classes.form} noValidate>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem>
                  <Button color="primary">Update Profile</Button>
                </GridItem>
              </GridContainer>                                    
            </form>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
        <CustomTabs
          title=""
          headerColor="primary"
          tabs={[
            {
              tabName: "About",
              tabIcon: AccountCircle,
              tabContent: (
                <Tasks
                  checkedIndexes={[0, 3]}
                  tasksIndexes={[0, 1, 2, 3]}
                  tasks={bugs}
                />
              )
            },
            {
              tabName: "Task List",
              tabIcon: Assignment,
              tabContent: (
                <Tasks
                  checkedIndexes={[0]}
                  tasksIndexes={[0, 1]}
                  tasks={website}
                />
              )
            },
            {
              tabName: "Report",
              tabIcon: Assessment,
              tabContent: (
                <Card chart>
                  <CardHeader color="success">
                    <ChartistGraph
                      className="ct-chart"
                      data={dailySalesChart.data}
                      type="Line"
                      options={dailySalesChart.options}
                      listener={dailySalesChart.animation}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Child Details</h4>
                    <p className={classes.cardCategory}>
                      <span className={classes.successText}>
                        <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                      </span>{" "}
                      increase.
                    </p>
                  </CardBody>
                  <CardFooter chart>                   
                    <Button color="warning">Export as PDF</Button>                   
                  </CardFooter>                  
                </Card>
              )
            }
          ]}
        />
        </GridItem>
      </GridContainer>
  );
}