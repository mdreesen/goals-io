import { IndexKind } from 'typescript';
import loggedInUser from '~/utils/loggedInUser';

export default defineEventHandler(async (event) => {
    // make sure the user is logged in
    // This will throw a 401 error if the request doesn't come from a valid user session
    const user = await loggedInUser(event);
    const data = user?.affirmations;

    const formatArray = data?.map((item) => {
      return {
        content: item.affirmation,
        label: item.kind,
        date: item.date,
        _id: item._id
      }
    });

    const growth = formatArray?.filter(items => items.label.includes('Growth')) ?? [];
    const mindfulness = formatArray?.filter(items => items.label.includes('Mindfulness')) ?? [];
    const positivity = formatArray?.filter(items => items.label.includes('Positivity')) ?? [];
    const selfWorth = formatArray?.filter(items => items.label.includes('Self Worth')) ?? [];

    return {
      growth: growth,
      mindfulness: mindfulness,
      positivity: positivity,
      selfWorth: selfWorth
    }
  });