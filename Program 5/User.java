package com.example.program5;
class User {

//    Variables
    int id;
    String name,password;

    //    Constructor with two parameters
    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }

    //    Constructor with three parameters
    public User(int id, String name, String password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
