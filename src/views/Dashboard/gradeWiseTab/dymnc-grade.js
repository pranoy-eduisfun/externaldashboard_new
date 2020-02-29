    import React from 'react';
    import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
    import DataTable, { createTheme } from 'react-data-table-component'; 
    import {
        Badge,
        Button,
        ButtonDropdown,
        ButtonGroup,
        ButtonToolbar,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardTitle,
        Col,
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
        Progress,
        Row,
        Table,
        Nav, NavItem, NavLink, TabContent,
        TabPane
      } from 'reactstrap';

    export default class DynamicGradeTab extends React.Component {
        constructor(props) {
          super(props);
          this.chartReference = React.createRef();
          this.state={
          }
        } 
        
        componentDidUpdate(){
            console.log(this.props.data.currentSelectedGrade);
            console.log(this.props.gradeData);  
            console.log(this.props.gradeDetails);       
        }

      
        render() {     
            let ovsPercentage = [];
            let ovStudentCount = [];
            let selectedGrade = this.props.data.currentSelectedGrade;
            let completeGradeData = this.props.gradeData;
            let gradeDetails = this.props.gradeDetails;
            console.log(gradeDetails);
            let gradeSubjects = gradeDetails != undefined ? gradeDetails.Grade.subjects : ""
          
            if(gradeDetails != undefined){
                gradeSubjects.map((object, i) => console.log(object.subject));
            }
      
            let studentListing = this.props.gradeDetails;

            let studentListingData = studentListing != undefined ? studentListing.Grade.stats.gradewise_student_score : "";

            let selecetedGradeStudentCount = "";
            console.log(completeGradeData);

            for(let i=0;i<completeGradeData.students.length;i++){
                // console.log(completeGradeData.students[i].Grade)
                if(selectedGrade===completeGradeData.students[i].Grade){
                    // console.log(completeGradeData.students[i].Grade);
                    // console.log(completeGradeData.students[i].StudentCount);
                    selecetedGradeStudentCount = completeGradeData.students[i].StudentCount;
                }
            }

            for(let i=0;i<completeGradeData.score.grade.length;i++){
                // console.log(completeGradeData.score.grade[i].grade)
                if(selectedGrade===completeGradeData.score.grade[i].grade){
                    // console.log(completeGradeData.score.grade[i].score);
                    let selectedGradeDataArr = completeGradeData.score.grade[i].score;
                    for(let k = 0;k<selectedGradeDataArr.length;k++){
                        // console.log(selectedGradeDataArr[k].Percent);
                        // console.log(selectedGradeDataArr[k].StudentCount);
                        ovsPercentage.push(selectedGradeDataArr[k].Percent);
                        ovStudentCount.push(selectedGradeDataArr[k].StudentCount);
                    }
                }
            }


            let barChartStudent = {
                labels: ovsPercentage,  
                datasets: [  
                  {
                    label: "Student Overall Score",
                    fill: true,
                    data: ovStudentCount,
                    backgroundColor: [
                        "#C62828", "#7B1FA2", "#303F9F", "#0097A7", "#00796B", "#558B2F"
                    ],
                    hoverBackgroundColor: [ 
                        "#C62828", "#7B1FA2", "#303F9F", "#0097A7", "#00796B", "#558B2F"
                    ]
                  }]
              };  


            let columns = [
                {
                  name: 'User Id',
                  selector: 'user_id',
                  sortable: true,
                },
                {
                  name: 'Full Name',
                  selector: 'fullname',
                  sortable: true,
                  right: true,
                },
                {
                    name: 'Knowledge wealth',
                    selector: 'knowledge_wealth',
                    sortable: true,
                  },
                  {
                    name: 'Knowledge Currency',
                    selector: 'knowledge_currency',
                    sortable: true,
                    right: true,
                  },
                  {
                    name: 'Learning Currency',
                    selector: 'learning_currency',
                    sortable: true,
                  },
                  {
                    name: 'Grade Rank',
                    selector: 'grade_rank',
                    sortable: true,
                    right: true,
                  },
                  {
                    name: 'Global Rank',
                    selector: 'global_rank',
                    sortable: true,
                  },
                  {
                    name: 'Time Alloted',
                    selector: 'time_alloted',
                    sortable: true,
                    right: true,
                  },
                  {
                    name: 'Time Spend',
                    selector: 'time_spend',
                    sortable: true,
                    right: true,
                  }
              ];  
              
            //   let data = [
            //       { id: 1, title: 'Conan the Barbarian', year: '1982' }
            //     ]
            let data = studentListingData;

            const doughnut = {
              labels: [
                'Red',
                'Green',
                'Yellow',
              ],
              datasets: [
                {
                  data: [300, 50, 100],
                  backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                  ],
                  hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                  ],
                }],
            };


          return (
            <Row>
            <Col>
              {/* <Card> */}

                <CardBody>
                  <Row>
                    <Col xs="12" md="12" xl="12">
                      {/* <Row>
                        <Col sm="12">
                          <div className="callout callout-info">
                            <strong className="h3">Selected Grade</strong>    <strong className="h4"> - {selectedGrade}</strong>
                          </div>
                        </Col>
                    </Row> */}
                      <hr className="mt-0" />
                      <Row>
                        <Col sm="12">
                          <div className="callout callout-warning">
                            <strong className="h4">Total Students</strong>    <strong className="h5"> - {selecetedGradeStudentCount}</strong>
                          </div>
                        </Col>
                    </Row>
                    <hr className="mt-0" />
                    </Col>
                  </Row>
                  <br />

                      
                      {/* <Col xs="12" md="12" xl="12">
                        <Row>
                        {gradeDetails != undefined ? gradeSubjects.map((object, i) =>   
                          <Col sm="3" key={i}>
                            <div className="callout callout-danger">
                              <small className="text-muted">{object.subject}</small>
                              <br />
                            <strong className="h4">{object.StudentCount}</strong>
                            </div>
                          </Col>
                          ): null}
                        </Row>
                      </Col>  */}
                      <Row className="text-center">
                      {gradeDetails != undefined ? gradeSubjects.map((object, i) =>
                                  <Col sm={12} md className="mb-sm-2 mb-0">
                                    <div className="text-muted">{object.subject}</div>
                                    {/* <strong>29.703 Users (40%)</strong> */}
                                    <strong>{object.StudentCount}</strong>
                                    <Progress className="progress-xs mt-2" color="success" value="40" />
                                  </Col>
                      ): null}           
                                  {/* <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                                    <div className="text-muted">Biology</div>
                                    <strong>24.093 Users (20%)</strong>
                                    <Progress className="progress-xs mt-2" color="info" value="20" />
                                  </Col>
                                  <Col sm={12} md className="mb-sm-2 mb-0">
                                    <div className="text-muted">Physics</div>
                                    <strong>78.706 Views (60%)</strong>
                                    <Progress className="progress-xs mt-2" color="warning" value="60" />
                                  </Col>
                                  <Col sm={12} md className="mb-sm-2 mb-0">
                                    <div className="text-muted">Chemistry</div>
                                    <strong>22.123 Users (80%)</strong>
                                    <Progress className="progress-xs mt-2" color="danger" value="80" />
                                  </Col> */}
                        </Row>
  
                  <hr className="mt-0" />
                  <Row>
                        <Col sm="12">
                          <Bar ref={this.chartReference} data={barChartStudent} height={70} /> 
                        </Col> 
                  </Row>        
                  
                      <Row>
                        <Col sm="12">
                          <div className="callout callout-warning">
                            <strong className="h5">Student Listing</strong> 
                          </div>
                          <DataTable
                        //  title="Student Listing"
                        columns={columns}
                        data= {data}
                        theme="solarized"
                        />
                        </Col>
                    </Row> 
                </CardBody>
              {/* </Card> */}

              {/* <Card> */}
              {/* <CardHeader>
                Doughnut Chart
                <div className="card-header-actions">
                  <a href="http://www.chartjs.org" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader> */}

              <CardBody>
              <Row>
                  <Col sm="6">
                          <div className="callout callout-warning">
                            <strong className="h4">Completion Rate</strong>  
                          </div>

                <div className="chart-wrapper">
                  <Doughnut data={doughnut} />
                </div>
        
                </Col>
              </Row>  
              </CardBody>
            {/* </Card> */}
            </Col>
          </Row>
        )
        }
      }

      

      

      