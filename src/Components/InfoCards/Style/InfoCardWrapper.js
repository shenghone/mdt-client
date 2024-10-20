import styled from "styled-components";

export default styled.div`
  --headerBg: #0f4c75;
  --bodyBg: #bbe1fa;
  --fontColour: #004c6b;
  --headerFontColour: #fff;

  .numberCardContainer {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 260px;
    grid-template-areas: "headerC" "main" "captionBox";
    height: 260px;
    max-width: 95%;
    justify-self: center;

    > div {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    > .cardHeader {
      grid-area: headerC;
      border-radius: 15px 15px 0 0;
    }
    > .mainEntry {
      grid-area: main;
      background-color: var(--bodyBg);
    }
    > .cardCaption {
      text-align: center;
      grid-area: captionBox;
      background-color: var(--bodyBg);
    }
  }
  .cardHeader {
    color: var(--headerFontColour);
    background-color: var(--headerBg);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.2rem;
    padding: 1rem;
    font-weight: normal;
  }
  .mainEntry {
    color: var(--fontColour);
    background-color: var(--bodyBg);
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem 1rem 0 1rem;
    background: red;
  }
  .cardCaption {
    color: var(--fontColour);
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0.6rem;
    border-radius: 0 0 15px 15px;
  }

  .percentageCardContainer {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: grid;
    border-radius: 15px;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "headerC" "main";
    height: 260px;
    width: 260px;

    justify-self: center;

    > .cardHeader {
      grid-area: headerC;
      border-radius: 15px 15px 0 0;
    }
    > .percentage {
      border-radius: 0 0 15px 15px;
      grid-area: main;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--bodyBg);
      .CircularProgressbar {
        /* transform: scale(0.45); */
        max-width: 38%;
      }
      .CircularProgressbar-path {
        stroke: #0089c1;
      }
      .CircularProgressbar-trail {
        stroke: #efefef;
      }
      .CircularProgressbar-text {
        fill: var(--fontColour);
      }
    }
  }
`;
