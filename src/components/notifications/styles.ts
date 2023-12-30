import styled from "styled-components";

export const NoficationContainer = styled.div`
  position: relative;
  display: flex;
  
  span {
    color : #fff;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 8px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left : 12px;
    top : -5px;
  }
`;
export const RecentNofications = styled.div`
 position: absolute;
 top : 55px;
 left : calc(100vw - 700px);
 height: 400px;
 width: 400px;

 section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .recents {
    display: flex;
    flex-direction: column;
    justify-content : flex-start;
    max-width: 100%;
    height: 100%;
    margin-top: 25px;
    div {
      margin-bottom: 5px;
      border-radius: 6px;
      padding : 10px;
      height: 80px;
      p {
        color : #858585;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
      }
    }
  }
 }
`;