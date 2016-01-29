feature: Taking Life Temperature

Description: As an apprentice, I need to measure how I feel in the different areas of my life.

Scenario 1: Measuring an area of life

Given an Area of Life
When I gradually express how I feel about that area of life at the current moment
	And I can accept the selected measure
Then the measurement is store with a time stamp
	And another Area of Life is presented to be measure

Scenario 2: Visualize Life Temperature
Given all Areas of Life
	And all have a measurement
Then I can visualize all measurements
	And I can easily compare each measure

