import { ValidationContext } from "sanity";

export default async function uniqueRequirement(
  value: string | undefined,
  context: ValidationContext
): Promise<true | string> {
  if (!value) return true;

  const { document, type, path } = context;
  if (!document || !type || !path || path.length === 0)
    return 'Validation context missing document, path, or type information.';

  // Extract document type and field name
  const documentType = document._type;
  const fieldName = path[path.length - 1];

  // Construct the GROQ query to check for existing documents with the same field value (case-insensitive)
  let query = `*[_type == "${documentType}" && lower(${fieldName}) == lower($field)`;
  const params: { [key: string]: any } = { field: value };

  // If editing an existing document, exclude it from the search
  if (document._id) {
    query += ` && _id != $currentId && _id != $relatedId`;
    params.currentId = document._id;
    params.relatedId = document._id.replace('drafts.', '');
  }

  query += `][0]`; // Fetch the first matching document, if any

  try {
    const existing = await context
      .getClient({ apiVersion: '2024-12-23' })
      .fetch(query, params);

    if (existing)
      return `A ${documentType} with this ${fieldName} already exists.`;

    return true;
  } catch (error) {
    return 'Unable to validate uniqueness.';
  }
}