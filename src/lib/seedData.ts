import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const seedMetadata = async () => {
  const personalityTypes = [
    {
      id: 'intj',
      code: 'INTJ',
      name: 'The Architect',
      description: 'Imaginative and strategic thinkers with a plan for everything.',
      strengths: ['Strategic', 'Independent', 'Logical', 'Ambitious'],
      weaknesses: ['Arrogant', 'Judgmental', 'Overly Analytical'],
      careers: ['Software Developer', 'Scientist', 'Judge', 'Pilot']
    },
    {
      id: 'enfp',
      code: 'ENFP',
      name: 'The Campaigner',
      description: 'Enthusiastic, creative, and sociable free spirits who can always find a reason to smile.',
      strengths: ['Curious', 'Observant', 'Energetic', 'Excellent Communicator'],
      weaknesses: ['Overthinking', 'Easily Stressed', 'Sensitive'],
      careers: ['Journalist', 'Consultant', 'Social Worker', 'Artist']
    },
    // Add more types as needed...
  ];

  const traits = [
    {
      id: 'introversion',
      name: 'Introversion vs Extraversion',
      description: 'How you handle social interaction and where you get your energy.',
      iconName: 'Users'
    },
    {
      id: 'intuition',
      name: 'Intuition vs Sensing',
      description: 'How you process information and perceive the world.',
      iconName: 'Eye'
    }
  ];

  const quizzes = [
    {
      id: 'q-introversion',
      traitId: 'introversion',
      questions: [
        {
          text: 'Do you prefer small social gatherings over large parties?',
          options: [
            { text: 'Always', score: 5 },
            { text: 'Sometimes', score: 3 },
            { text: 'Rarely', score: 1 }
          ]
        },
        {
          text: 'Do you feel drained after long social events?',
          options: [
            { text: 'Yes, definitely', score: 5 },
            { text: 'A little', score: 3 },
            { text: 'Not at all', score: 1 }
          ]
        }
      ]
    }
  ];

  try {
    const typesRef = collection(db, 'personality_types');
    for (const type of personalityTypes) {
      await setDoc(doc(typesRef, type.id), type);
    }

    const traitsRef = collection(db, 'traits');
    for (const trait of traits) {
      await setDoc(doc(traitsRef, trait.id), trait);
    }

    const quizzesRef = collection(db, 'quizzes');
    for (const quiz of quizzes) {
      await setDoc(doc(quizzesRef, quiz.id), quiz);
    }

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};
