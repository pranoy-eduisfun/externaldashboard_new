            import React, { Component, lazy, Suspense } from 'react';
            import { Bar, Line } from 'react-chartjs-2';
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
            import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
            import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
            import DynamicGradeTab from './gradeWiseTab/dymnc-grade';
            import moment from 'moment';



            const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

            const brandPrimary = getStyle('--primary')
            const brandSuccess = getStyle('--success')
            const brandInfo = getStyle('--info')
            const brandWarning = getStyle('--warning')
            const brandDanger = getStyle('--danger')

            // Card Chart 1
            const cardChartData1 = {
              labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              datasets: [
                {
                  label: 'Active Students',
                  backgroundColor: brandPrimary,
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [65, 59, 84, 84, 51, 55, 40],
                },
              ],
            };

            const cardChartOpts1 = {
              tooltips: {
                enabled: false,
                custom: CustomTooltips
              },
              maintainAspectRatio: false,
              legend: {
                display: false,
              },
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      color: 'transparent',
                      zeroLineColor: 'transparent',
                    },
                    ticks: {
                      fontSize: 2,
                      fontColor: 'transparent',
                    },

                  }],
                yAxes: [
                  {
                    display: false,
                    ticks: {
                      display: false,
                      min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
                      max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
                    },
                  }],
              },
              elements: {
                line: {
                  borderWidth: 1,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              }
            }


            // Card Chart 2
            const cardChartData2 = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: brandInfo,
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [1, 18, 9, 17, 34, 22, 11],
                },
              ],
            };

            const cardChartOpts2 = {
              tooltips: {
                enabled: false,
                custom: CustomTooltips
              },
              maintainAspectRatio: false,
              legend: {
                display: false,
              },
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      color: 'transparent',
                      zeroLineColor: 'transparent',
                    },
                    ticks: {
                      fontSize: 2,
                      fontColor: 'transparent',
                    },

                  }],
                yAxes: [
                  {
                    display: false,
                    ticks: {
                      display: false,
                      min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
                      max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
                    },
                  }],
              },
              elements: {
                line: {
                  tension: 0.00001,
                  borderWidth: 1,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            };

            // Card Chart 3
            const cardChartData3 = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [78, 81, 80, 45, 34, 12, 40],
                },
              ],
            };

            const cardChartOpts3 = {
              tooltips: {
                enabled: false,
                custom: CustomTooltips
              },
              maintainAspectRatio: false,
              legend: {
                display: false,
              },
              scales: {
                xAxes: [
                  {
                    display: false,
                  }],
                yAxes: [
                  {
                    display: false,
                  }],
              },
              elements: {
                line: {
                  borderWidth: 2,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            };

            // Card Chart 4
            const cardChartData4 = {
              labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.3)',
                  borderColor: 'transparent',
                  data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
                },
              ],
            };

            const cardChartOpts4 = {
              tooltips: {
                enabled: false,
                custom: CustomTooltips
              },
              maintainAspectRatio: false,
              legend: {
                display: false,
              },
              scales: {
                xAxes: [
                  {
                    display: false,
                    barPercentage: 0.6,
                  }],
                yAxes: [
                  {
                    display: false,
                  }],
              },
            };

            // Social Box Chart
            const socialBoxData = [
              { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
              { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
              { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
              { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
            ];

            const makeSocialBoxData = (dataSetNo) => {
              const dataset = socialBoxData[dataSetNo];
              const data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: dataset.data,
                    label: dataset.label,
                  },
                ],
              };
              return () => data;
            };

            const socialChartOpts = {
              tooltips: {
                enabled: false,
                custom: CustomTooltips
              },
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                display: false,
              },
              scales: {
                xAxes: [
                  {
                    display: false,
                  }],
                yAxes: [
                  {
                    display: false,
                  }],
              },
              elements: {
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            };

            // sparkline charts
            const sparkLineChartData = [
              {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'New Clients',
              },
              {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Recurring Clients',
              },
              {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Pageviews',
              },
              {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Organic',
              },
              {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'CTR',
              },
              {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Bounce Rate',
              },
            ];

            const makeSparkLineData = (dataSetNo, variant) => {
              const dataset = sparkLineChartData[dataSetNo];
              const data = {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [
                  {
                    backgroundColor: 'transparent',
                    borderColor: variant ? variant : '#c2cfd6',
                    data: dataset.data,
                    label: dataset.label,
                  },
                ],
              };
              return () => data;
            };

            const sparklineChartOpts = {
              tooltips: {
                enabled: false,
                custom: CustomTooltips
              },
              responsive: true,
              maintainAspectRatio: true,
              scales: {
                xAxes: [
                  {
                    display: false,
                  }],
                yAxes: [
                  {
                    display: false,
                  }],
              },
              elements: {
                line: {
                  borderWidth: 2,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
              legend: {
                display: false,
              },
            };

            // Main Chart

            //Random Numbers
            function random(min, max) {
              return Math.floor(Math.random() * (max - min + 1) + min);
            }

            var elements = 27;
            var data1 = [];
            var data2 = [];
            var data3 = [];

            for (var i = 0; i <= elements; i++) {
              data1.push(random(50, 200));
              data2.push(random(80, 100));
              data3.push(65);
            }

            const mainChart = {
              labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(brandInfo, 10),
                  borderColor: brandInfo,
                  pointHoverBackgroundColor: '#fff',
                  borderWidth: 2,
                  data: data1,
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'transparent',
                  borderColor: brandSuccess,
                  pointHoverBackgroundColor: '#fff',
                  borderWidth: 2,
                  data: data2,
                },
                {
                  label: 'My Third dataset',
                  backgroundColor: 'transparent',
                  borderColor: brandDanger,
                  pointHoverBackgroundColor: '#fff',
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: data3,
                },
              ],
            };



            console.log(mainChart);

            const mainChartOpts = {
              tooltips: {
                enabled: false,
                custom: CustomTooltips,
                intersect: true,
                mode: 'index',
                position: 'nearest',
                callbacks: {
                  labelColor: function(tooltipItem, chart) {
                    return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
                  }
                }
              },
              maintainAspectRatio: false,
              legend: {
                display: false,
              },
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      drawOnChartArea: false,
                    },
                  }],
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      maxTicksLimit: 5,
                      stepSize: Math.ceil(250 / 5),
                      max: 250,
                    },
                  }],
              },
              elements: {
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            };

            class Dashboard extends Component {
              constructor(props) {
                super(props);

                this.toggle = this.toggle.bind(this);
                this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

                this.toggle = this.toggle.bind(this);

                this.state = {
                  dropdownOpen: false,
                  radioSelected: 2,        
                  dashboard: null,
                  startDate: moment().format('YYYY-MM-DD'),
                  endDate: moment().format('YYYY-MM-DD'),
                  pageLoading: true,
                  activeTab: "V",
                  currentSelectedGrade:"V",
                  studentGradeData:"",
              };
              this.fetchAnalytics = this.fetchAnalytics.bind(this);
              this.handleChange = this.handleChange.bind(this);
              this.downloadToExcel = this.downloadToExcel.bind(this);
              }

              lorem() {
                return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
              }

              toggleTab(tab) {
                console.log(tab);
                let selectedGrade = tab;
                this.setState({
                  activeTab: tab,
                });

                              //=========================== Grade Wise Data ========================

                              fetch('https://0e3r24lsu5.execute-api.ap-south-1.amazonaws.com/Prod/getgradeinfo?schoolId=1&gradeId=16&page=1')
                              .then(result=>result.json())
                              .then(items=> {
                                  console.log(`GRADE-WISE-DATA :: ${JSON.stringify(items)}`);
                            
                                this.setState({
                                    currentSelectedGrade:selectedGrade,
                                    gradeDetails:items
                                })    
                              });

                

              }

              tabPane(val) {
                console.log(val);
                return (
                  <>
                  <h2>PP</h2>
                    {/* <DynamicGradeTab data={this.state} gradeData={compeleteStudStats} gradeDetails={this.state.gradeDetails} />  */}
                  </>
                );
              }

              toggle() {
                this.setState({
                  dropdownOpen: !this.state.dropdownOpen,
                });
              }

              onRadioBtnClick(radioSelected) {
                this.setState({
                  radioSelected: radioSelected,
                });
              }

              loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

              
              //=============================================================================================================

              downloadToExcel (data, fileName) {
                var result = {};
                // console.log(`DATA :: ${JSON.stringify(data)}`);
                // if (data.labels !== undefined) {
                //     data.labels.forEach((key, i) => result[key] = data.values[i]);
                //     jsonToCsv(result, fileName);
                // }
                //  else 
                //     jsonToCsv(data, fileName);
                
            }

              handleChange(event) {
                const target = event.target;
                const value = target.type === 'checkbox' ? target.checked : target.value;
                const name = target.name;
                this.setState({
                    [name]: value
                });
              }


              fetchAnalytics () {
                    this.setState({
                        pageLoading: true  
                    }, () => {
                      
                    fetch('https://0e3r24lsu5.execute-api.ap-south-1.amazonaws.com/Prod/getschoolinfo?schoolId=1&boardId=7&abc=1')
                        .then(result=>result.json())
                        .then(items=> {
                            console.log(`Fetech Dashboard items :: ${JSON.stringify(items)}`);
                            localStorage.setItem('dashboard', JSON.stringify(items));
                            localStorage.setItem('startDate', this.state.startDate);
                            localStorage.setItem('endDate', this.state.endDate);
                            this.setState({
                                dashboard: items
                            }, () => {
                                this.setState({
                                    pageLoading: false,
                                });
                            });
                        });
                    });
              }


              changeGradeFun (selectedGrade){
                console.log(selectedGrade);        
                

                let dashboardData = this.state.dashboard;
                let compeleteStudStats = dashboardData.School.stats;

                return(
                  <DynamicGradeTab data={this.state} gradeData={compeleteStudStats} gradeDetails={this.state.gradeDetails} />
                )
              }



              
              componentDidMount() {
                let t_DashboardItems = localStorage.getItem('dashboard');
                console.log(t_DashboardItems);
                console.log(this.state.dashboard);
                // console.log(`COmponent did mount :: ${JSON.stringify(this.props)}`);
                if (t_DashboardItems == null) {
                    this.fetchAnalytics();
                }
                else { 
                    this.setState({
                        dashboard: JSON.parse(t_DashboardItems),
                        startDate: localStorage.getItem('startDate'),
                        endDate: localStorage.getItem('endDate'),
                        pageLoading: false,
                    });
                }

              //======================= GRADE WISE SUBJECT AND STUDENT LISTING =========================
                
                fetch('https://0e3r24lsu5.execute-api.ap-south-1.amazonaws.com/Prod/getgradeinfo?schoolId=1&gradeId=16&page=1')
                .then(result=>result.json())
                .then(items=> {
                    console.log(`GRADE-WISE-DATA :: ${JSON.stringify(items)}`);
              
                  this.setState({
                      currentSelectedGrade:this.state.currentSelectedGrade,
                      gradeDetails:items
                  })    
                });   




              }



              render() {
                let dashboardData = this.state.dashboard;
                console.log(dashboardData);

                  if(dashboardData!=null){

                  let studentArr = dashboardData.School.stats.students;
                  let StudentGrades = dashboardData.School.stats.students;
                  let compeleteStudStats = dashboardData.School.stats;
                  let labelArr=[];
                  let dataArr=[];
                  let totalStd; 

                  for(let i=0;i<studentArr.length;i++){
                      labelArr.push(studentArr[i].Grade) 
                      dataArr.push(studentArr[i].StudentCount);  
                    } 

                    totalStd = dashboardData.School.stats.students;
                    let TotalCount  = 0; 

                    for(let i=0;i<totalStd.length;i++)
                      {
                        TotalCount += totalStd[i]['StudentCount'] 
                      } 

                  let dataNew = {
                    labels: labelArr,  
                    datasets: [  
                      {
                        label: "Bitcoin",
                        fill: true,
                        data: dataArr,
                        backgroundColor: [
                            "#7E57C2 ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow", "gray"
                        ],
                        hoverBackgroundColor: [ 
                            "#7E57C2 ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow", "gray"
                        ]
                      }]
                  }; 

                  //==========='CHART 01'===========//
                  let overallScore = dashboardData.School.stats.score.overall_score;
                  let ovsPercentage=[];
                  let ovStudentCount=[];
                      
                  for(let i=0;i<overallScore.length;i++){
                    ovsPercentage.push(overallScore[i].Percent)   
                    ovStudentCount.push(overallScore[i].StudentCount);  
                  } 

                  
                  let barChartStudent = {
                      labels: ovsPercentage,  
                      datasets: [  
                        {
                          label: "Student Overall Score",
                          fill: true,
                          data: ovStudentCount,
                          backgroundColor: [
                              "#C62828", "#7B1FA2", "#303F9F", "#0097A7", "#00796B", "#558B2F", "Yellow", "gray"
                          ],
                          hoverBackgroundColor: [ 
                              "#C62828", "#7B1FA2", "#303F9F", "#0097A7", "#00796B", "#558B2F", "Yellow", "gray"
                          ]
                        }]
                    }; 


                    const overallScoreChart = {
                      labels: ovsPercentage,
                      datasets: [
                        {
                          label: 'Overall Score',
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: 'rgba(75,192,192,0.4)',
                          borderColor: 'rgba(75,192,192,1)',
                          borderCapStyle: 'butt',
                          borderDash: [],
                          borderDashOffset: 0.0,
                          borderJoinStyle: 'miter',
                          pointBorderColor: 'rgba(75,192,192,1)',
                          pointBackgroundColor: '#fff',
                          pointBorderWidth: 1,
                          pointHoverRadius: 5,
                          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                          pointHoverBorderColor: 'rgba(220,220,220,1)',
                          pointHoverBorderWidth: 2,
                          pointRadius: 1,
                          pointHitRadius: 10,
                          data: ovStudentCount,
                        },
                      ],
                    };

                    const overallScoreChartOpts = {
                      tooltips: {
                        enabled: false,
                        custom: CustomTooltips,
                        intersect: true,
                        mode: 'index',
                        position: 'nearest',
                        callbacks: {
                          labelColor: function(tooltipItem, chart) {
                            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
                          }
                        }
                      },
                      maintainAspectRatio: false,
                      legend: {
                        display: false,
                      },
                      scales: {
                        xAxes: [
                          {
                            gridLines: {
                              drawOnChartArea: false,
                            },
                          }],
                        yAxes: [
                          {
                            ticks: {
                              beginAtZero: true,
                              maxTicksLimit: 5,
                              stepSize: Math.ceil(250 / 5),
                              max: 250000,
                            },
                          }],
                      },
                      elements: {
                        point: {
                          radius: 0,
                          hitRadius: 10,
                          hoverRadius: 4,
                          hoverBorderWidth: 3,
                        },
                      },
                    };

                    const mixedChartdata = {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [{
                          label: 'Sales',
                          type:'line',
                          data: [51, 65, 40, 49, 60, 37, 40],
                          fill: false,
                          borderColor: '#EC932F',
                          backgroundColor: '#EC932F',
                          pointBorderColor: '#EC932F',
                          pointBackgroundColor: '#EC932F',
                          pointHoverBackgroundColor: '#EC932F',
                          pointHoverBorderColor: '#EC932F',
                          yAxisID: 'y-axis-2'
                        },{
                          type: 'bar',
                          label: 'Visitor',
                          data: [200, 185, 590, 621, 250, 400, 95],
                          fill: false,
                          backgroundColor: '#71B37C',
                          borderColor: '#71B37C',
                          hoverBackgroundColor: '#71B37C',
                          hoverBorderColor: '#71B37C',
                          yAxisID: 'y-axis-1'
                        }]
                    };
                    
                    const mixedChartoptions = {
                      responsive: true,
                      tooltips: {
                        mode: 'label'
                      },
                      elements: {
                        line: {
                          fill: false
                        }
                      },
                      scales: {
                        xAxes: [
                          {
                            display: true,
                            gridLines: {
                              display: false
                            },
                            labels: {
                              show: true
                            }
                          }
                        ],
                        yAxes: [
                          {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            id: 'y-axis-1',
                            gridLines: {
                              display: false
                            },
                            labels: {
                              show: true
                            }
                          },
                          {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            id: 'y-axis-2',
                            gridLines: {
                              display: false
                            },
                            labels: {
                              show: true
                            }
                          }
                        ]
                      }
                    };

                  const plugins = [{
                      afterDraw: (chartInstance, easing) => {
                          const ctx = chartInstance.chart.ctx;
                          ctx.fillText("This text drawn by a plugin", 100, 100);
                      }
                  }];


                return (
                  <div className="animated fadeIn">
                    {/* ==================================== SUMMARY CARD BOX  - START ===================================== */}
                    <Row>
                      <Col xs="12" sm="6" lg="4">
                        <Card className="text-white " style={{backgroundColor:'#2982cc'}}>
                          <CardBody className="pb-0">
                            <ButtonGroup className="float-right">
                              <i className="fa fa-address-card mt-8" style={{fontSize: 40}}></i>
                            </ButtonGroup>
                            <div className="text-value">{dashboardData != undefined ? dashboardData.School.register_students:""}</div>
                            <div>Registered Students</div>
                          </CardBody>
                          <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                          </div>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" lg="4">
                        <Card className="text-white bg-primary" 
                        // style={{backgroundColor:'#f6960b'}}
                        >
                          <CardBody className="pb-0">
                            <ButtonGroup className="float-right">
                              <i className="fa fa-users fa-lg mt-8" style={{fontSize: 40}}></i>
                            </ButtonGroup>
                            <div className="text-value">{dashboardData != undefined ? dashboardData.School.active_students:""}</div>
                            <div>Active Students</div>
                          </CardBody>
                          <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                            <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                          </div>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" lg="4">
                        <Card className="text-white " style={{backgroundColor:'#d93737'}}> 
                          <CardBody className="pb-0">
                            <ButtonGroup className="float-right">
                              <i className="fa fa-user-plus fa-lg mt-8" style={{fontSize: 40}}></i>
                            </ButtonGroup>
                            <div className="text-value">{dashboardData != undefined ? dashboardData.School.stats.students[0].StudentCount:""}</div>
                            <div>Dormant Students</div>
                          </CardBody>
                          <div className="chart-wrapper" style={{ height: '70px' }}>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                    {/* ==================================== SUMMARY CARD BOX  - END ===================================== */}  

                      
                    <Row>
                      <Col>
                        <Card>
                          {/* ==================================== CHART - 01 - OVERALL SCORE  - START ===================================== */} 
                          <CardBody>
                            <Row>
                              <Col sm="5">
                                <CardTitle className="mb-0">Overall Score</CardTitle>
                            </Col>
                            </Row>
                            <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                              <Line data={overallScoreChart} options={overallScoreChartOpts} height={300} />
                              {/* <Bar ref={this.chartReference} data={barChartStudent} height={70} />  */}
                              {/* <Bar data={mixedChartdata}  options={mixedChartoptions} plugins={plugins} height={70}/> */}
                            </div>
                          </CardBody>
                          {/* ==================================== CHART - 01 - OVERALL SCORE  - END ===================================== */} 
                          <CardFooter>
                            <Row className="text-center">
                              <Col sm={12} md className="mb-sm-2 mb-0">
                                <div className="text-muted">Maths</div>
                                <strong>29.703 Users (40%)</strong>
                                <Progress className="progress-xs mt-2" color="success" value="40" />
                              </Col>
                              <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
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
                              </Col>
                            </Row>
                          </CardFooter>
                        </Card>
                      </Col>
                    </Row>

                    {/* ------------------------------------------------------------------------------------------------- */}
                    <Row>
                      <Col>
                        <Card>
                          <CardHeader>
                            Grade Wise Summary
                          </CardHeader>
                          <CardBody>
                            {/* <Row>
                            {StudentGrades.map((object, i) => 
                              <Col xs="3" md="3" xl="3" style={{paddingBottom:2}} key={i}>  
                                <div col="2" className="mb-3 mb-xl-0 col-sm-4 col-md-2 col-xl" key={i}>
                                  <button className="btn btn-primary btn-block" onClick={() => this.changeGradeFun(object.Grade)}>Grade - {object.Grade}</button>
                                </div>
                              </Col>
                            )} 
                            </Row> */}
                            <Row>
                            <Col xs="12" md="12" className="mb-12">
                            <Nav tabs>
                    
                              {StudentGrades.map((object, i) => 
                              // <Col xs="3" md="3" xl="3" style={{paddingBottom:2}} key={i}>  
                              //   <div col="2" className="mb-3 mb-xl-0 col-sm-4 col-md-2 col-xl" key={i}>
                              //     <button className="btn btn-primary btn-block" onClick={() => this.changeGradeFun(object.Grade)}>Grade - {object.Grade}</button>
                              //   </div>
                              // </Col>

                                <NavItem key={i}>
                                <NavLink
                                  // style={{fontWeight:700}}
                                  active={this.state.activeTab === object.Grade}
                                  onClick={() => { this.toggleTab(object.Grade); }}
                                >
                                  <i className="icon-calculator"></i> Grade - {object.Grade}
                                </NavLink>
                                </NavItem>
                              )} 

                              {/* <NavItem>
                                <NavLink
                                  active={this.state.activeTab[0] === '2'}
                                  onClick={() => { this.toggleTab(0, '2'); }}
                                >
                                  Profile
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  active={this.state.activeTab[0] === '3'}
                                  onClick={() => { this.toggleTab(0, '3'); }}
                                >
                                  Messages
                                </NavLink>
                              </NavItem> */}
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                              {/* {this.tabPane(this.state.activeTab[0])} */}
                              {this.changeGradeFun(this.state.activeTab)}
                              {/* <DynamicGradeTab data={this.state} gradeData={compeleteStudStats} gradeDetails={this.state.gradeDetails} />  */}
                            </TabContent>
                          </Col>
                            </Row>    
                            {/* <Row>
                              <Col xs="12" md="12" xl="12">
                                <Row>
                                  <Col sm="12">
                                    <div >
                                    <DynamicGradeTab data={this.state} gradeData={compeleteStudStats} gradeDetails={this.state.gradeDetails} /> 
                                    </div>
                                  </Col>
                                </Row>
                                <hr className="mt-0" />
                              </Col>
                            </Row> */}
                            <br />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    


                    <Row>
                      <Col xs="6" sm="6" lg="3">
                        <Suspense fallback={this.loading()}>
                          <Widget03 dataBox={() => ({ variant: 'facebook', friends: '89k', feeds: '459' })} >
                            <div className="chart-wrapper">
                              <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90} />
                            </div>
                          </Widget03>
                        </Suspense>
                      </Col>

                      <Col xs="6" sm="6" lg="3">
                        <Suspense fallback={this.loading()}>
                          <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
                            <div className="chart-wrapper">
                              <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90} />
                            </div>
                          </Widget03>
                        </Suspense>
                      </Col>

                      <Col xs="6" sm="6" lg="3">
                        <Suspense fallback={this.loading()}>
                          <Widget03 dataBox={() => ({ variant: 'linkedin', contacts: '500+', feeds: '292' })} >
                            <div className="chart-wrapper">
                              <Line data={makeSocialBoxData(2)} options={socialChartOpts} height={90} />
                            </div>
                          </Widget03>
                        </Suspense>
                      </Col>

                      <Col xs="6" sm="6" lg="3">
                        <Suspense fallback={this.loading()}>
                          <Widget03 dataBox={() => ({ variant: 'google-plus', followers: '894', circles: '92' })} >
                            <div className="chart-wrapper">
                              <Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90} />
                            </div>
                          </Widget03>
                        </Suspense>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Card>
                          <CardHeader>
                            Traffic {' & '} Sales
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="6" xl="6">
                                <Row>
                                  <Col sm="6">
                                    <div className="callout callout-info">
                                      <small className="text-muted">New Clients</small>
                                      <br />
                                      <strong className="h4">9,123</strong>
                                      <div className="chart-wrapper">
                                        <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col sm="6">
                                    <div className="callout callout-danger">
                                      <small className="text-muted">Recurring Clients</small>
                                      <br />
                                      <strong className="h4">22,643</strong>
                                      <div className="chart-wrapper">
                                        <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                                <hr className="mt-0" />
                                <div className="progress-group mb-4">
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">
                                      Monday
                                    </span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Progress className="progress-xs" color="info" value="34" />
                                    <Progress className="progress-xs" color="danger" value="78" />
                                  </div>
                                </div>
                                <div className="progress-group mb-4">
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">
                                    Tuesday
                                    </span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Progress className="progress-xs" color="info" value="56" />
                                    <Progress className="progress-xs" color="danger" value="94" />
                                  </div>
                                </div>
                                <div className="progress-group mb-4">
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">
                                    Wednesday
                                    </span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Progress className="progress-xs" color="info" value="12" />
                                    <Progress className="progress-xs" color="danger" value="67" />
                                  </div>
                                </div>
                                <div className="progress-group mb-4">
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">
                                    Thursday
                                    </span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Progress className="progress-xs" color="info" value="43" />
                                    <Progress className="progress-xs" color="danger" value="91" />
                                  </div>
                                </div>
                                <div className="progress-group mb-4">
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">
                                    Friday
                                    </span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Progress className="progress-xs" color="info" value="22" />
                                    <Progress className="progress-xs" color="danger" value="73" />
                                  </div>
                                </div>
                                <div className="progress-group mb-4">
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">
                                    Saturday
                                    </span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Progress className="progress-xs" color="info" value="53" />
                                    <Progress className="progress-xs" color="danger" value="82" />
                                  </div>
                                </div>
                                <div className="progress-group mb-4">
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">
                                    Sunday
                                    </span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Progress className="progress-xs" color="info" value="9" />
                                    <Progress className="progress-xs" color="danger" value="69" />
                                  </div>
                                </div>
                                <div className="legend text-center">
                                  <small>
                                    <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
                                    New clients
                                    &nbsp;
                                    <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
                                    Recurring clients
                                  </small>
                                </div>
                              </Col>
                              <Col xs="12" md="6" xl="6">
                                <Row>
                                  <Col sm="6">
                                    <div className="callout callout-warning">
                                      <small className="text-muted">Pageviews</small>
                                      <br />
                                      <strong className="h4">78,623</strong>
                                      <div className="chart-wrapper">
                                        <Line data={makeSparkLineData(2, brandWarning)} options={sparklineChartOpts} width={100} height={30} />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col sm="6">
                                    <div className="callout callout-success">
                                      <small className="text-muted">Organic</small>
                                      <br />
                                      <strong className="h4">49,123</strong>
                                      <div className="chart-wrapper">
                                        <Line data={makeSparkLineData(3, brandSuccess)} options={sparklineChartOpts} width={100} height={30} />
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                                <hr className="mt-0" />
                                <ul>
                                  <div className="progress-group">
                                    <div className="progress-group-header">
                                      <i className="icon-user progress-group-icon"></i>
                                      <span className="title">Male</span>
                                      <span className="ml-auto font-weight-bold">43%</span>
                                    </div>
                                    <div className="progress-group-bars">
                                      <Progress className="progress-xs" color="warning" value="43" />
                                    </div>
                                  </div>
                                  <div className="progress-group mb-5">
                                    <div className="progress-group-header">
                                      <i className="icon-user-female progress-group-icon"></i>
                                      <span className="title">Female</span>
                                      <span className="ml-auto font-weight-bold">37%</span>
                                    </div>
                                    <div className="progress-group-bars">
                                      <Progress className="progress-xs" color="warning" value="37" />
                                    </div>
                                  </div>
                                  <div className="progress-group">
                                    <div className="progress-group-header">
                                      <i className="icon-globe progress-group-icon"></i>
                                      <span className="title">Organic Search</span>
                                      <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
                                    </div>
                                    <div className="progress-group-bars">
                                      <Progress className="progress-xs" color="success" value="56" />
                                    </div>
                                  </div>
                                  <div className="progress-group">
                                    <div className="progress-group-header">
                                      <i className="icon-social-facebook progress-group-icon"></i>
                                      <span className="title">Facebook</span>
                                      <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
                                    </div>
                                    <div className="progress-group-bars">
                                      <Progress className="progress-xs" color="success" value="15" />
                                    </div>
                                  </div>
                                  <div className="progress-group">
                                    <div className="progress-group-header">
                                      <i className="icon-social-twitter progress-group-icon"></i>
                                      <span className="title">Twitter</span>
                                      <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
                                    </div>
                                    <div className="progress-group-bars">
                                      <Progress className="progress-xs" color="success" value="11" />
                                    </div>
                                  </div>
                                  <div className="progress-group">
                                    <div className="progress-group-header">
                                      <i className="icon-social-linkedin progress-group-icon"></i>
                                      <span className="title">LinkedIn</span>
                                      <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                                    </div>
                                    <div className="progress-group-bars">
                                      <Progress className="progress-xs" color="success" value="8" />
                                    </div>
                                  </div>
                                  <div className="divider text-center">
                                    <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"
                                            title="" data-original-title="show more"><i className="icon-options"></i></Button>
                                  </div>
                                </ul>
                              </Col>
                            </Row>
                            <br />

                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                  </div>
                );
              }else{
                return null
              }
            }

            }

            export default Dashboard;
