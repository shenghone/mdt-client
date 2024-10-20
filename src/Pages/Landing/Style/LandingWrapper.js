import styled from "styled-components";

const LandingWrapper = styled.div`
  @media screen and (max-width: 2400px) {
    display: grid;
    position: relative;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    padding: 2rem;
    grid-row-gap: 1.5rem;
    .logoContainer {
      width: 100%;
      height: 100px;
      position: relative;
      display: grid;
      grid-template-columns: auto 1fr auto;
      .logoInnerWrapper {
        height: 100px;
        img {
          object-fit: cover;
          height: 100px;
        }
      }
      .loginButtons {
        grid-column: 3 / span 1;
        display: flex;
        margin: auto;
        height: 50px;
        font-weight: 600;
        align-content: center;
        gap: 15px;
        .schedule {
          background: rgb(62, 119, 150);
          color: #fff;
        }
        .buttonClass {
          align-self: center;
          font-size: 20px;
          border-radius: 15px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
          padding: 1rem;
          cursor: pointer;
          font-weight: 700;
          :hover {
            opacity: 0.65;
          }
        }
      }
    }
    .footerWrapper {
      position: absolute;
      bottom: 0;
      padding: 0.5rem;
      display: grid;
      place-items: center;
      width: 100%;
      background: rgb(62, 119, 150);
      color: #fff;
      box-sizing: border-box;
    }
    .tools {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(6, 100px);
      .contentBody {
        grid-column: 1 / span 10;
        grid-row: 3 / span 6;
        display: flex;
        flex-direction: column;
        padding: 0 2rem;

        .contentInnerWrapper {
          display: grid;
          align-items: start;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          height: 100%;
          grid-template-areas:
            "title image"
            "content image";
        }
        .titleWrapper {
          grid-row: 1 / span 2;
          .resultContent {
            display: grid;
            height: 100%;
            align-items: start;
            line-height: 1.6rem;
            font-weight: 400;
            font-size: 1.1rem;
          }
          .resultTitle {
            font-size: 1.4rem;
            margin: 0;
          }
        }
        .imgWrapper {
          justify-content: end;
          width: 100%;
          position: relative;
          grid-area: image;
          display: grid;
          height: 100%;
          margin: 1rem 0;
          > img {
            width: 389px;
          }
        }

        > section {
          display: flex;
        }
      }
      .left {
        position: relative;
        padding: 0 4rem;
        grid-column: 1 / span 6;
        grid-row: 1 / span 8;

        .titleRow {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          .blueSquare {
            border-radius: 4px;
            left: -0.5rem;
            position: absolute;
            width: 50px;
            height: 50px;
            background: rgb(59, 118, 251);
          }
        }

        h2 {
          font-size: 4rem;
          margin: 0;
        }
      }
    }
    .solutionSection {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(6, 100px);
      .left {
        position: relative;
        height: 100%;
        box-sizing: border-box;
        padding: 0 1rem 4rem 4rem;
        grid-column: 1 / span 6;
        grid-row: 1 / span 8;
        margin-right: 1.5rem;

        .navSection {
          margin: 1.5rem 0;
          display: grid;
          grid-row-gap: 1rem;

          .linkTo {
            font-size: 28px;
            overflow: hidden;
            position: relative;
            padding-bottom: 5px;
            :before {
              padding-bottom: 0.5rem;
              position: absolute;
              height: 3px;
              transform: translateX(-100%);
              width: 65%;
              content: "";
              background: rgb(252, 214, 119);
              bottom: -3px;
              transition: 1s;
            }
            :hover {
              opacity: 0.8;
              &:before {
                transform: translateX(0px);
              }
            }
          }
          > section {
            font-weight: 700;
            font-size: 2rem;
            :hover {
              cursor: pointer;
            }
          }
          .disabled {
            pointer-events: none;
            .soon {
              font-size: 0.9rem;
            }
          }
        }
        .titleRow {
          display: flex;
          height: 160px;
          gap: 1rem;
          margin-bottom: 1rem;
          .redSquare {
            border-radius: 4px;
            left: -0.5rem;
            position: absolute;
            width: 50px;
            height: 50px;
            background: rgb(221, 44, 59);
          }
        }

        h2 {
          font-size: 4rem;
          margin: 0;
          margin-bottom: 1rem;
        }
        .solutionContent {
          line-height: 1.5rem;
          margin-bottom: 1rem;
          display: grid;
          grid-template-columns: auto 1fr;
          grid-template-rows: 1fr;
          grid-column-gap: 1.5rem;
        }
        .solutionContent:nth-of-type(1) {
          margin-top: 1rem;
        }
        .sectionIcon {
          width: 30px;
          height: 30px;
          position: relative;
          > img {
            padding-top: 0.25rem;
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      /*bar chart section*/
      .right {
        grid-column: 7 / span 4;
        grid-row: 1 / span 6;
        width: 100%;
        .barArea {
          display: grid;
          align-content: space-between;
          width: 100%;
          height: 100%;

          .barOutterWrapper {
            margin-bottom: 1.5rem;
            width: 100%;
            display: flex;
            height: 100px;
            justify-content: flex-end;
            gap: 1rem;
            .waterDrop {
              margin: auto 1rem auto 0;
              position: relative;
              width: 90px;
              height: 90px;

              display: grid;
              justify-content: center;
              > h5 {
                padding: 0;
                margin: 0;
                z-index: 1;
                margin-top: 1rem;
                font-size: 1.5rem;
              }
              > p {
                z-index: 1;
                margin: 0;
                margin-top: -1rem;
              }

              :after {
                z-index: 0;
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 0% 100% 100% 100%;
                transform: rotate(135deg);
                background: rgb(230, 230, 230);
              }
            }
            .bar1 {
              background: linear-gradient(
                171deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(69, 112, 235, 1) 0%,
                rgba(82, 106, 217, 1) 100%
              );
              width: 70%;
              height: 100%;
            }
            .bar2 {
              background: linear-gradient(
                171deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(99, 93, 186, 1) 0%,
                rgba(117, 82, 158, 1) 100%
              );
              width: 60%;
              height: 100%;
            }
            .bar3 {
              background: rgb(2, 0, 36);
              background: linear-gradient(
                171deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(122, 79, 149, 1) 0%,
                rgba(141, 68, 120, 1) 100%
              );
              width: 60%;
              height: 100%;
            }
            .bar4 {
              background: rgb(2, 0, 36);
              background: linear-gradient(
                171deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(148, 65, 111, 1) 0%,
                rgba(165, 55, 85, 1) 100%
              );
              width: 35%;
              height: 100%;
            }
            .bar5 {
              background: rgb(171, 51, 76);
              background: linear-gradient(
                171deg,
                rgba(171, 51, 76, 1) 0%,
                rgba(190, 41, 51, 1) 100%
              );
              width: 30%;
              height: 100%;
            }
            .bar6 {
              background: rgb(191, 41, 51);
              width: 25%;
              height: 100%;
            }
          }
        }
        .chartHeader {
          display: grid;
          align-items: end;
          height: 160px;
          padding-bottom: 16px;
          h4 {
            width: 100%;
            font-size: 1.3rem;
            letter-spacing: 0.06rem;
            margin: 0;
            bottom: 0;
            padding-right: 0.5rem;
          }
        }
      }
    }
    .mainContainer {
      font-family: "Roboto";
      margin-top: 1.5rem;
      padding: 0 4rem;
      display: grid;
      box-sizing: border-box;
      grid-row-gap: 2.5rem;
      .bottomSection {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 1rem;
        align-items: center;
        > section {
          height: 100%;
          padding: 0.5rem;
          display: grid;
          align-items: start;
          display: grid;
          grid-template-rows: 50px auto 1fr;
        }
        .sub {
          line-height: 1.45rem;
        }
        .sectionTitle {
          font-family: "Lato", sans-serif;
          font-weight: 700;
          font-size: 18px;
        }
        .square {
          border-radius: 4px;
          width: 50px;
          height: 50px;
          color: #fff;
          font-size: 2rem;
          display: grid;
          align-items: end;
          justify-content: start;
          font-weight: 900;
          position: relative;
          p {
            font-family: "Lato", sans-serif;
            position: absolute;
            font-size: 2.5rem;
            margin: 0;
            margin-left: -0.2rem;
            margin-bottom: -0.6rem;
            font-weight: 900;
          }
        }
        .square1 {
          background: rgb(252, 201, 78);
        }
        .square2 {
          background: rgb(59, 118, 151);
        }
        .square3 {
          background: rgb(114, 23, 30);
        }
      }
      .topSection {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-column-gap: 2.5rem;
        grid-row-gap: 1rem;
        box-sizing: border-box;
        place-items: center;
        h2 {
          font-size: 2.9rem;
          letter-spacing: 0.01rem;
          line-height: 4rem;
          padding: 0;
          margin: 0;
          width: 100%;
          font-weight: 700;
          text-align: left;
        }
        .sub {
          font-weight: 400;
          line-height: 1.4rem;
          padding: 0 0.5rem;
        }
        @media screen and (min-width: 1440px) {
          .sub {
            font-size: 1.4rem;
            line-height: 1.6rem;
          }
        }
        .schoolWrapper {
          grid-column: 2 / span 1;
          grid-row: 1 / span 2;
          position: relative;
          > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
`;

export default LandingWrapper;
