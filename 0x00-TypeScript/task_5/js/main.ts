interface Credits {
  credits: number;
}

interface MajorCredits extends Credits {
  type: 'Major';
}

interface MinorCredits extends Credits {
  type: 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const newCredits: MajorCredits = {
    credits: subject1.credits + subject2.credits,
    type: 'Major'
  }

  return newCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const newCredits: MinorCredits = {
    credits: subject1.credits + subject2.credits,
    type: 'Minor'
  }

  return newCredits;
}
