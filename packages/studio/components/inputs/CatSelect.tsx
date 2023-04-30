import React, { useCallback, useEffect, useState } from 'react'
import { Card, Stack, Select } from '@sanity/ui'
import { StringInputProps, set, unset } from 'sanity'

type CatBreed = {
	title: string
	value: string
}

const CatSelect = ({value: fieldValue, onChange, elementProps}: StringInputProps) => {
	const [breeds, setBreeds] = useState<CatBreed[]>([])
  
  useEffect(() => {
		console.log('useEffect');
		const getCatBreeds = async () => {
      const catBreeds : CatBreed[] = await fetch('https://catfact.ninja/breeds')
        .then(res => res.json())
        .then(json => json.data.map(({ breed } : any) => ({
            title: breed, 
            value: breed.toLowerCase().split(' ').join('-')
          })))
      
      setBreeds(catBreeds)
    }

		getCatBreeds()
  }, [setBreeds])

	const handleChange = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
    const nextValue = event.currentTarget.value
		console.log('handleChange', nextValue, set(nextValue));
    onChange(nextValue ? set(nextValue) : unset())
	}, [onChange])

	return (
		<Card>
			<Stack space={4}>
				<Select
					{...elementProps}
					label="Cat Breed"
					onChange={handleChange}
					value={fieldValue}
					placeholder="Select a cat breed"
				>
					{
						breeds.map(({ title, value: catValue }) => (
							<option key={catValue} value={catValue}>
								{title}
							</option>
						))
					}
				</Select>
			</Stack>
		</Card>
	)
}

export default CatSelect