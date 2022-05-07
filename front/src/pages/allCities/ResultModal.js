import React from 'react';

const elements = [
  { element: '자유도', rank: '64위', word: 'Freedom' },
  { element: 'GDP', rank: '24위', word: 'GDP' },
  { element: '관대함', rank: '36위', word: 'Generosity' },
  { element: '기대수명', rank: '7위', word: 'HLE' },
  { element: '청렴도', rank: '30위', word: 'corruption' },
  { element: '물가', rank: '35위', word: 'price' },
  { element: '사회복지', rank: '63위', word: 'socialSupport' },
];

const ResultModal = (props) => {
  const { open, close, data } = props;
  return (
    <div className={open ? 'openModal modal ' : 'modal'}>
      <section className='w-11/12 '>
        <button onClick={close} className='ml-96 mt-2'>
          ✖️
        </button>
        <div class='flex flex-col '>
          <div class='overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div class='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
              <div class='overflow-hidden'>
                <table class='min-w-full text-center'>
                  <thead class='border-b'>
                    <tr>
                      <th
                        scope='col'
                        class='text-sm font-medium text-gray-900 px-6 py-4'
                      >
                        HPI 요소
                      </th>
                      <th
                        scope='col'
                        class='text-sm font-medium text-gray-900 px-6 py-4'
                      >
                        한국🇰🇷
                      </th>
                      <th
                        scope='col'
                        class='text-sm font-medium text-custom-main font-bold px-6 py-4'
                      >
                        {`${data.Country}`}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {elements.map((it) => {
                      return (
                        <tr class='border-b bg-gray-50 border-gray-200'>
                          <td class='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>
                            {it.element}
                          </td>
                          <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                            {it.rank}
                          </td>
                          <td class='text-sm text-blue-600 font-bold px-6 py-4 whitespace-nowrap'>
                            {data[it.word]}위
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultModal;
