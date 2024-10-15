import React from "react";
import styled from "styled-components";

const Style = styled.div`
  .question {
    color: red;
  }
  .answer {
    color: blue;
  }
`;
const Ch3 = () => {
  return (
    <Style>
      <div className="question">산점도를 사용하는이유?</div>
      <div className="answer">
        산점도를 사용하는 이유는 두 변수의 상관관계(양의 상관관계, 음의
        상관관계)를 시각화하여 모델 선택, 데이터의 분포, 이상치 탐지 등을
        파악하는 데 사용됩니다. 이때 x축과 y축은 각각 두 변수를 나타내고, 각
        점은 개별 관측값을 의미합니다.
      </div>
      <div className="question">박스 플롯을 사용하는 이유?</div>
      <div className="answer">
        박스플롯을 사용하는 이유는 데이터의 분포를 시각화하여 이상치, 극단값,
        최대값, 최소값, 중앙값, 사분위수를 파악하는 데 사용됩니다. 박스는
        Q1(1분위수)와 Q3(3분위수) 사이의 값들을 포함하며, 박스 안의 막대기는
        중앙값을 의미합니다. 박스의 크기가 작을수록(세로가 작을수록) 데이터가
        중앙값 주변에 몰려 있으며, 이는 데이터의 변동성이 작음을 의미합니다.
        수염 부분은 최대값과 최소값을 의미하며, 일반적으로 박스와 IQR의 1.5배
        이내의 값들을 나타냅니다. 박스 밖의 점들은 일반적으로 이상치와 극단값을
        나타냅니다.
      </div>
      <div className="question">히트맵을 사용하는 이유?</div>
      <div className="answer">
        히트맵을 사용하는 이유는 데이터간의 상관관계를 시각화하여 변수간 서로
        상관관계가 높은것을 제거하기위해 사용됩니다.일반적으로 0.7이상인경우
        둘중 하나를 제거를 합니다.PCA의 경우 데이터간 상관관계가 0에 가까운것을
        볼수있습니다.
      </div>
      <div className="question">PCA를 사용하는 이유?</div>
      <div className="answer">PCA를 사용하는 이유는</div>
    </Style>
  );
};

export default Ch3;
