import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthenticationService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account=new Account(this.client);  
  }

  async createAccount({email,password,name}){
    try{
        const userAccount=await this.account.create(ID.unique(),email,password,name);
        if(userAccount){
            return this.login({email,password});
        }
        else{
            return userAccount;
        }
    }
    catch(error){
        throw error;
    }
  }

  async login({email,password}){
    try{
        return await this.account.createEmailSession(email,password);
    }
    catch(error){
        throw error;
    }
  }

  async getCurrentUser(){
    try{
        return this.account.get();
    }
    catch(error){
        console.log("GetCurrentUSer:error:",error)
    }
  }
  async logout(){
    try{
        return this.account.deleteSession();
    }
    catch(error){
        console.log("Logout Error:",error)
    }
  }
}

const authService=new AuthenticationService();

export default authService
