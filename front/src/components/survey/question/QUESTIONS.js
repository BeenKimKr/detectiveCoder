export const QUESTIONS = [
  {
    id: 'socialSupport',
    descriptions: {
      corruption: '부패했지만, 사회 복지는 좋은 나라',
      Freedom: '사회복지가 좋은 북한',
      price: '사회복지가 좋은 나라에서 풀만 먹고 살기',
      GDP: '경제는 거의 최하위...사회 복지는 좋음',
      temperature:
        '사용자가 선택한 계절이 없는 사회복지가 좋은 나라..이런식으로..',
      HLE: '사회 복지는 좋지만 10살까지 살기',
      Generosity: '사회복지만 좋고, 국민성은 바닥..',
    },
  },
  {
    id: 'corruption',
    descriptions: {
      socialSupport: '청렴하지만 , 사회 복지는 없는 나라',
      Freedom: '청렴한 북한',
      price: '청렴하지만 빅맥이 귀한 음식.',
      GDP: '청렴하지만, 재정위기가 심각한 나라',
      temperature: '사용자가 선택한 계절이 없는 청렴한 나라..이런식으로..',
      HLE: '청렴하지만 10살까지 살기',
      Generosity: '청렴하지만, 국민성은 바닥..',
    },
  },
  {
    id: 'Freedom',
    descriptions: {
      socialSupport: '사회 복지가 없는 남한',
      price: '빅맥이 귀한 남한.',
      price: '삶의 자유가 있지만 경제는 최하위..',
      temperature:
        '삶의 자유가 있지만, 기온은 안 좋은..(-> 안좋다의 기준은 사용자가 선택한 계절이 없다? ).',
      HLE: '삶의 자유가 있지만, 10살까지 살기.',
      Generosity: '삶은 자유롭지만, 국민성은 바닥인...',
      corruption: '삶은 자유롭지만, 부패한 나라.',
    },
  },
  {
    id: 'price',
    descriptions: {
      socialSupport: '물가O 사회복지 X',
      // 삶의자유: '물가O, 삶의자유 X',
      GDP: '물가O, 경제 없음',
      temperature: '물가O, 기온 없음.',
      HLE: '물가O, 기대수명 없음.',
      Generosity: '물가O, 관대함 없음',
      corruption: '물가O, 청렴도 없음.',
    },
  },
  {
    id: 'GDP',
    descriptions: {
      socialSupport: '경제는 좋지만, 사회복지 없는',
      Freedom: '경제는 좋지만, 삶의 자유 없는 ',
      price: '경제는 좋지만, 빅맥 엄청 비싸서 못 먹음',
      // 기온: '경제는 좋지만, 기온 안좋음',
      HLE: '경제는 좋지만, 기대수명 안좋음',
      Generosity: '경제 좋지만, 국민성 X',
      corruption: '부패했지만 경제는 좋음',
    },
  },
  {
    id: 'temperature',
    descriptions: {
      사회복지: '기온 좋고, 사회복지 X',
      삶의자유: '기온 좋고, 삶의 자유 X',
      물가: '기온 좋고, 물가 X',
      // 경제: '기온 좋고, 경제 안좋음',
      기대수명: '기온 좋고, 기대수명 안좋음',
      관대함: '기온 좋고 국민성 X',
      청렴도: '기온 좋고 청렴도 X',
    },
  },
  {
    id: 'HLE',
    descriptions: {
      socialSupport: '기대수명 좋고, 사회복지 X',
      Freedom: '기대수명 좋고, 삶의 자유 X',
      price: '기대수명 좋고, 물가 X',
      GDP: '기대수명 좋고, 경제 안좋음',
      // 관대함: '기대수명 좋고 국민성 X',
      temperature: '기대수명 좋고 기온 X',
    },
  },
  {
    id: 'Generosity',
    descriptions: {
      socialSupport: '관대함 좋고, 사회복지 X',
      Freedom: '관대함 좋고, 삶의 자유 X',
      price: '관대함 좋고, 물가 X',
      GDP: '관대함 좋고, 경제 안좋음',
      temperature: '관대함 좋고 기온 X',
      // 기대수명: '관대함 좋고 기대수명 X',
    },
  },
];
