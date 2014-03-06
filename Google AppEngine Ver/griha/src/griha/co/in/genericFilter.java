package griha.co.in;

import java.io.IOException;

import javax.servlet.*;

public class genericFilter implements Filter{
	public FilterConfig filterConfig;
	
	public void doFilter(final ServletRequest request, final ServletResponse response, FilterChain chain) throws IOException, ServletException
	{
		chain.doFilter(request, response);
	}
	
	public void init(final FilterConfig filter)
	{
		this.filterConfig = filter;	
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

}
