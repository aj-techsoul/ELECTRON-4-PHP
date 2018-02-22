set newpat=%cd%\php
For /F "Delims=" %%I In ('echo %PATH% ^| find /C /I "%newpat%"') Do set pathExists=%%I 2>Nul
If %pathExists%==0 ( 
    setx /M PATH "%PATH%;%newpat%" 
    echo PHP SET Successfully
)