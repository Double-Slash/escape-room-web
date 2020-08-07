import styled from 'styled-components';


//전체 감쌈
export const Container = styled.div`
    overflow: hidden;
    padding: 20px;
    margin: 10px;
    padding-left: 70px;
    
`;

export const Img = styled.div`
    position: relative;
    height : 200px;
    width : 300px;
   img{
    height: 200px;
    width: 300px;
   }
`
export const text = styled.div`
        position: absolute;
        top:10%;
        left:85%;
        text-align: center;

        button{
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2.5px;
            font-weight: 500;
            color: #000;
            background-color: #fff;
            border: none;
            border-radius: 45px;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease 0s;
            cursor: pointer;
            outline: none;
            }
        
        button:hover {
            background-color: #2EE59D;
            box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
            color: #fff;
            transform: translateY(-7px);
        }
`


export const Row = styled.div`
    overflow: hidden;
    
`;

export const Column = styled.div`
    float: left;
    width: 25%;
    padding-top: 10px;
   
`;

export const Item = styled.div`
    border: grey solid 1px;
    text-align: center;
    border-style: none;
    
`;

export const More = styled.div`
	margin-left: 370px;
    padding-left: 370px;

    button{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    }

button:hover {
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
}
    
`;
