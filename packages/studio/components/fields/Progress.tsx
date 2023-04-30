import {ObjectInputProps, ObjectMember} from 'sanity'
import {Flex, Card, Box, Stack} from '@sanity/ui'

interface ProgressProps extends ObjectInputProps {
  members: ObjectMember[]
  stringFields?: string[]
}

type FieldProgress = {
  name: string
  value: boolean | string,
}

export function Progress(props: ProgressProps) {
  const {members = [], stringFields} = props
  console.log({members, stringFields})
  const booleanFieldProgress = members.reduce<FieldProgress[]>((acc, member) => {
    const isFieldMember = member.kind === 'field' && member.field.schemaType.name === 'boolean'

    if (!isFieldMember) {
      return acc
    }

    return [...acc, {name: member.name, value: Boolean(member.field.value)}]
  }, [])
  const totalBooleanFieldsCount = booleanFieldProgress.length
  const completeBooleanFieldsCount = booleanFieldProgress.filter((field) => field.value).length
  const areBooleanFieldsCompleted = completeBooleanFieldsCount === totalBooleanFieldsCount

  const stringFieldProgress = members.reduce<FieldProgress[]>((acc, member) => {
    const isFieldMember = member.kind === 'field' && stringFields?.includes(member.field.id)

    
    if (!isFieldMember) {
      return acc
    }
    console.log({isFieldMember, member})

    return [...acc, {name: member.name, value: member.field.value}]
  }, [])

  const totalStringFieldsCount = stringFieldProgress.length
  const completeStringFieldsCount = stringFieldProgress.filter((field) => {
    // is is object
    if (typeof field.value === 'object') {
      return field.value.current.length > 0
    }

    // is string
    return field && field.value && field.value.length > 0
  }).length

  const areStringFieldsCompleted = completeBooleanFieldsCount === totalBooleanFieldsCount

  const totalFieldsCount = totalBooleanFieldsCount + totalStringFieldsCount
  const completeFieldsCount = completeBooleanFieldsCount + completeStringFieldsCount
  const areFieldsCompleted = completeFieldsCount && totalFieldsCount

  return (
		<Stack space={4}>
	    <Card tone={areFieldsCompleted ? `positive` : `transparent`} border padding={3} radius={2}>
	      <Flex align="center" gap={3}>
	        <Box>
	          {completeFieldsCount} / {totalFieldsCount} Tasks Complete
	        </Box>
	      </Flex>
	    </Card>
      {/* Render the default form */}
			{props.renderDefault(props)}
    </Stack>
  )
}