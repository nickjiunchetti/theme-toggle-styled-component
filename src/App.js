import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './themes'

const StyledApp = styled.div`
	color: ${(props) => props.theme.fontColor};
`

function App() {
	const [theme, setTheme] = useState(true)

	const themeToggler = () => {
		setTheme(!theme)
	}

	return (
		<ThemeProvider theme={theme ? darkTheme : lightTheme}>
			<GlobalStyles />
			<StyledApp>
				Teste
				<button onClick={themeToggler}>Change Theme</button>
			</StyledApp>
		</ThemeProvider>
	)
}

export default App;
