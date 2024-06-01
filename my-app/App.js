import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Devs</Text>
        <Text style={styles.taskCount}>14 tasks today</Text>
        <Image 
          source={{uri: 'person.png'}}
          style={styles.profilePic}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder= "Search" 
        />
        <TouchableOpacity style={styles.filterButton}>
          <MaterialIcons name="filter-list" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.categoryTitle}>Categories</Text>

      <View style={styles.categories}>
        <View style={styles.category}>
          <Image 
            source={{uri: 'young woman working online.png'}}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Exercises</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
        </View>

        <View style={styles.category}>
          <Image 
            source={{uri: 'young woman working at desk.png'}}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Study</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
        </View>
        
        <View style={styles.category}>
          <Image 
            source={{uri: '9a84fab95b.jpeg'}}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Code</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
        </View>

        <View style={styles.category}>
          <Image 
            source={{uri: '6529642.webp'}}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Cook</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
        </View>

        <View style={styles.category}>
          <Image 
            source={{uri: 'work.jpg'}}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Work</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
        </View>

        <View style={styles.category}>
          <Image 
            source={{uri: 'sleep.jpg'}}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Rest</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
        </View>

        <View style={styles.category}>
          <Image 
            source={{uri: 'eat.jpg'}}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Eat</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
        </View>

        <View style={styles.category}>
          <Image 
            source={{uri: 'images.jpeg'}}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Sleep</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
        </View>
      </View>

      <Text style={styles.ongoingTaskTitle}>Ongoing Task</Text>
      
      <View style={styles.taskList}>
        <View style={styles.task}>
          <Text style={styles.taskText}>Mobile App Development</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Web Development</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Push Ups</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Pinterest</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Shutterstock</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Flo</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>TikTok</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Fifa</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Poe</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>ChatGpt</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Call of Duty</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Wattpad</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>LinkedIn</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Github</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Capcut</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F4EE',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    color: 'gray',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  filterButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#EDEDED',
    borderRadius: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    flexWrap: 'wrap',
  },
  category: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: '48%',
    marginBottom: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ongoingTaskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskList: {
    marginTop: 10,
  },
  task: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  taskText: {
    fontSize: 16,
  },
});
