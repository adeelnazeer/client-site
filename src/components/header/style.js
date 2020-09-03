import React from 'react'
export default () => (
    <style js="true">
        {`
        .header-main{
            padding-top:2%;
            background: black;
        }
         .header-container{
            background-color: white;
            margin-top: 70px;
            margin-bottom: 20px;
            height: 100px;
            border: 5px solid #a47b00;
            border-left: none;
            border-right: none;
         }
         .header-container .header-subcontainer{
            background-color: white;
            height: 0px;
         }
         .header-container .header-subcontainer .header-row{
             align-items:center;
         }
         .header-container .header-subcontainer .header-row h4{
             color: black;
             text-decoration:none;
         }
         .header-container .header-subcontainer .header-row h4,a:hover{
             color:#bf8f00;
         }
         .header-container .header-subcontainer .header-row .header-img{
            text-align: center;
            padding: 0px;
            margin-left: 0px;
            margin-top: -116px;
         }
         .header-container .header-subcontainer .header-row .header-img .upper{
            width: 61%;
            border-right: none;
            border-left: none;
            border-left-bottom: none;
                 }
            .header-container .header-subcontainer .header-row .header-img .lower{
                width: 40%;
                border-top-left-radius: 90px;
                border-top-right-radius: 90px;
                margin-left: 3px;
                margin-top: -87px;
                background: white;
            }
        `}
    </style>
)