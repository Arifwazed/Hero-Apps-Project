const getInstalledApps = () => {
    const installedAppSTR = localStorage.getItem("installApps");

    if(installedAppSTR){
        const installedApp = JSON.parse(installedAppSTR);
        return installedApp;
    }else{
        return [];
    }
}

const addToLocalStorage = (id) => {
    const installedAppData = getInstalledApps();

    if(installedAppData.includes(id)){
        console.log("App already installed")
        return 0;
    }
    else{
        installedAppData.push(id);
        const data = JSON.stringify(installedAppData);
        localStorage.setItem("installApps",data);
        return 1;
    }
}
export {addToLocalStorage,getInstalledApps}