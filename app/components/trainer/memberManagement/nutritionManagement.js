import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

class NutritionManagement extends Component {
    
    constructor(props) {
        super(props);
        const params = props.route.params;
        this.state = {
            member: params.member,
            data: {
                labels: ["목표칼로리", '기초대사량'],
                datasets: [
                  {
                    data: [1609.551, 1153.8]
                  }
                ]
            },
            form: {
                age: '',
                gender: '',
                height: '',
                weight: ''
            }
        }
    }

    render() {
        const chartConfig = {
            backgroundGradientFrom: "#FFEDF5",
            // backgroundGradientFromOpacity: 1,
            backgroundGradientTo: "#FFEDF5",
            // backgroundGradientToOpacity: 0.5,
            color: () => `#000`,  //글씨 색
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
          };
        return (
            <View style={{alignItems: 'center', flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={{color: '#6A4DFF', fontSize: 20, fontWeight: 'bold', marginRight: 3}}>{this.state.member.name}</Text>
                        <Text style={{fontSize: 18}}>님의 핏로그</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                        
                    </View>
                    <View style={styles.personalInfoCon}>
                        <View style={styles.valueBox}>
                            <View style={styles.title}><Text>나이</Text></View>
                            <View style={styles.value}><Text>0</Text></View>
                        </View>
                        <View style={styles.valueBox}>
                            <View style={styles.title}><Text>성별</Text></View>
                            <View style={styles.value}><Text>0</Text></View>
                        </View>
                        <View style={styles.valueBox}>
                            <View style={styles.title}><Text>신장</Text></View>
                            <View style={styles.value}><Text>0</Text></View>
                        </View>
                        <View style={styles.valueBox}>
                            <View style={styles.title}><Text>체중</Text></View>
                            <View style={styles.value}><Text>0</Text></View>
                        </View>
                    </View>
                    <View style={styles.purposeContainer}>
                        <View style={styles.valueBox}>
                            <View style={styles.title}><Text>영양관리 목적</Text></View>
                            <View style={styles.value}><Text>0</Text></View>
                        </View>
                        <View style={styles.valueBox}>
                            <View style={styles.title}><Text>활동레벨</Text></View>
                            <View style={styles.value}><Text>0</Text></View>
                        </View>
                    </View>

                    <BarChart
                    style={{backgroundColor: 'black'}}
                    data={this.state.data}
                    width={280}
                    height={170}
                    fromZero={true}
                    withInnerLines={false}  //눈금선
                    yAxisSuffix=''
                    chartConfig={chartConfig}
                    verticalLabelRotation={0}
                    showValuesOnTopOfBars={true}
                    />



                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column', 
        backgroundColor: '#FFFFFF', 
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        borderRadius: 10
    },
    textContainer: {
        flexDirection: 'row', 
        alignItems: 'baseline', 
        alignSelf: 'flex-start', 
        marginBottom: 10
    },
    personalInfoCon: {
        flexDirection: 'row',
        height: 50
    },
    valueBox: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0EDFF',
        flex: 1
    },
    value: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    purposeContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        height: 50
    }
})

function mapStateToProps(state) {
    return {
      Profile: state.Profile,
      User: state.User,
      Members: state.Members
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({getProfile, getMembers}, dispatch);
// }

export default connect(mapStateToProps)(NutritionManagement);