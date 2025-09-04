#include<iostream>
#include<vector>
using namespace std;
void helper(vector<vector<string>>&arr,int curr,string prev,int len,int col){
    if(curr==len-1){
        for(int i=0;i<col;i++){
            cout<<prev+arr[curr][i]<<endl;
        }
        return;
    }
    else{
        for(int i=0;i<col;i++){
            helper(arr,curr+1,prev+arr[curr][i]+" ",len,col);
        }
    }
}
int main(){
    vector<string>temp;
    vector<vector<string>>arr;
    string t = "";
    int row,col;
    cout<<"Enter number of rows :-";
    cin>>row;
    cout<<"Enter number of cols :-";
    cin>>col;
    for(int i=0;i<row;i++){
        temp.clear();
        for(int j=0;j<col;j++){
            cin>>t;
            temp.push_back(t);
        }
        arr.push_back(temp);
    }
    helper(arr,0,"",row,col);
    return 0;
}