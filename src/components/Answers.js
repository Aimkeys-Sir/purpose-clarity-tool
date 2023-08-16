import React from 'react';

function Answers({ fomData }) {
  const {
    you, do:whatYouDo, love, serve, beneficiaries, transform, income
  } = fomData;

  return (
    <div >
      <h2 >Who are you?</h2>
      <p>{you}</p>
      <h2>What do you do well?</h2>
      <p>{whatYouDo}</p>
      <h2>What do you love to do?</h2>
      <p>{love}</p>
      <h2>Whom do you intend to serve?</h2>
      <p>{serve}</p>
      <h2>What do your beneficiaries need?</h2>
      <p>{beneficiaries}</p>
      <h2>How do your offerings transform your beneficiaries?</h2>
      <p>{transform}</p>
      <h2>What activities can generate income for you?</h2>
      <p>{income}</p>
    </div>
  );
}

export default Answers;
