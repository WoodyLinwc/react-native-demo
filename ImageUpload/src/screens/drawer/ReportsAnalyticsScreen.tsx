import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ReportsAnalyticsScreen: React.FC = () => {
  const reportCards = [
    {
      id: 1,
      title: 'Work Order Statistics',
      description: 'View completed, pending, and overdue work orders',
      icon: 'assignment',
      color: 'bg-blue-500',
      count: '24',
      label: 'Active Orders',
    },
    {
      id: 2,
      title: 'Inventory Analytics',
      description: 'Track inventory levels, usage patterns, and forecasts',
      icon: 'inventory',
      color: 'bg-green-500',
      count: '156',
      label: 'Items Tracked',
    },
    {
      id: 3,
      title: 'Performance Metrics',
      description: 'Equipment uptime, efficiency, and maintenance costs',
      icon: 'trending-up',
      color: 'bg-purple-500',
      count: '98.5%',
      label: 'Uptime',
    },
    {
      id: 4,
      title: 'Cost Analysis',
      description: 'Breakdown of maintenance and operational expenses',
      icon: 'attach-money',
      color: 'bg-orange-500',
      count: '$12.4K',
      label: 'Monthly Cost',
    },
  ];

  const quickStats = [
    { label: "Today's Tasks", value: '8', change: '+2' },
    { label: 'Open Issues', value: '3', change: '-1' },
    { label: 'Parts Used', value: '27', change: '+5' },
    { label: 'Efficiency', value: '92%', change: '+3%' },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        {/* Quick Stats Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold mb-4 text-gray-800">
            Quick Stats
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {quickStats.map((stat, index) => (
              <View
                key={index}
                className="bg-white rounded-lg p-4 mb-3 w-[48%] shadow-sm"
              >
                <Text className="text-gray-600 text-sm">{stat.label}</Text>
                <Text className="text-2xl font-bold text-gray-800 mt-1">
                  {stat.value}
                </Text>
                <Text className="text-green-600 text-xs mt-1">
                  {stat.change} from yesterday
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Reports Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold mb-4 text-gray-800">
            Reports & Analytics
          </Text>

          {reportCards.map(report => (
            <TouchableOpacity
              key={report.id}
              className="bg-white rounded-lg p-4 mb-4 shadow-sm"
            >
              <View className="flex-row items-start">
                <View className={`${report.color} rounded-full p-3 mr-4`}>
                  <Icon name={report.icon} size={24} color="white" />
                </View>

                <View className="flex-1">
                  <View className="flex-row justify-between items-start mb-2">
                    <Text className="text-lg font-semibold text-gray-800 flex-1">
                      {report.title}
                    </Text>
                    <View className="ml-2">
                      <Text className="text-xl font-bold text-gray-800 text-right">
                        {report.count}
                      </Text>
                      <Text className="text-sm text-gray-500 text-right">
                        {report.label}
                      </Text>
                    </View>
                  </View>

                  <Text className="text-gray-600 text-sm mb-3">
                    {report.description}
                  </Text>

                  <View className="flex-row justify-between items-center">
                    <Text className="text-blue-600 font-medium">
                      View Report
                    </Text>
                    <Icon name="chevron-right" size={20} color="#3b82f6" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Export Section */}
        <View className="bg-white rounded-lg p-4 shadow-sm">
          <Text className="text-xl font-bold mb-4 text-gray-800">
            Export Data
          </Text>

          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Icon name="file-download" size={24} color="#6b7280" />
            <View className="ml-3 flex-1">
              <Text className="text-gray-800 text-lg">Export to PDF</Text>
              <Text className="text-gray-500 text-sm">
                Generate comprehensive PDF reports
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#6b7280" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Icon name="table-chart" size={24} color="#6b7280" />
            <View className="ml-3 flex-1">
              <Text className="text-gray-800 text-lg">Export to Excel</Text>
              <Text className="text-gray-500 text-sm">
                Download data in spreadsheet format
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#6b7280" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3">
            <Icon name="email" size={24} color="#6b7280" />
            <View className="ml-3 flex-1">
              <Text className="text-gray-800 text-lg">Email Reports</Text>
              <Text className="text-gray-500 text-sm">
                Schedule automatic report delivery
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#6b7280" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReportsAnalyticsScreen;
