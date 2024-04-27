#include<iostream>
#include<fstream>
using namespace std;
class temp{
    string userName,Email,password;
    string searchName,searchPass,searchEmail;
    fstream file;
    public:
    void login();
    void sign_up();
    void forget_password();
}obj;
int main(){
    // int t1=clock_settime(0,1);
    // cout<<t1<<endl;
char choice;
cout<<"\n1-Login";
cout<<"\n2-sign-up";
cout<<"\n3-forget password";
cout<<"\n4-exit";
cout<<"\nEnter your choice ::";
cin>>choice;
switch(choice){
    case '1':
    cin.ignore();
    obj.login();
    break;
    case '2':
    cin.ignore();
    obj.sign_up();
    break;
    case '3':
    cin.ignore();
    obj.forget_password();
    break;
    case '4':
    return 0;
    break;
    default:
    cout<<"invalid selection";
}
}
void temp ::sign_up(){
    cout<<"\nEnter your username ::"<<endl;
    getline(cin,userName);
    cout<<"\nEnter your email address:: ";
    getline(cin,Email);
    cout<<"\nenter your password:: ";
    getline(cin,password);

    file.open("loginData.txt",ios::out | ios::app);
    file<<userName<<"*"<<Email<<"*"<<password<<endl;
    file.close();

}
void temp :: login(){
    // string searchName,searchPass;

    cout<<"----------LOGIN---------"<<endl;
    cout<<"enter your full name ::"<<endl;
getline(cin,searchName);
cout<<"enter your password::"<<endl;
getline(cin,searchPass);

file.open("loginData.txt",ios :: in);
getline(file,userName,'*');
getline(file,Email,'*');
getline(file,password,'\n');
while(!file.eof()){
    if(userName==searchName){
if(password==searchPass){
    cout<<"\nLogin is succesful----!";
    cout<<"\nusername ::"<<userName<<endl;
cout<<"\nemail::"<<Email<<endl;
}else{
    cout<<"password is incorrect";
}
    }
    getline(file,userName,'*');
getline(file,Email,'*');
getline(file,password,'\n');

}
file.close();
}
void temp::forget_password(){
cout<<"\nenter your username ::";
getline(cin,searchName);
cout<<"\nenter your email adress";
getline(cin,searchEmail);
file.open("loginData.txt",ios::in);
getline(file,userName,'*');
getline(file,Email,'*');
getline(file,password,'\n');
while(!file.eof()){
    if(userName==searchName){
        if(Email==searchEmail){
cout<<"\nAccount found....!"<<endl;
cout<<"your password::"<<password<<endl;
        }else{
            cout<<"not found-----!\n";
        }
    }else{
        cout<<"\nnot found--!\n";
    }
    getline(file,userName,'*');
    getline(file,Email,'*');
getline(file,password,'\n');
}
file.close();
// int t2=timer_gettime();
}